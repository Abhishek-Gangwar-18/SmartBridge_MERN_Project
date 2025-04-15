import UserSchema from "./UserSchema.js";
import DoctorSchema from "./DoctorSchema.js";
import BookingSchema from "./BookingSchema.js";
import Stripe from "stripe";

export const getCheckoutSession = async (req, res) => {
  try {
    const doctor = await DoctorSchema.findById(req.params.doctorId);
    const user = await UserSchema.findById(req.params.userId);

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      success_url: `${process.env.CLIENT_SITE_URL}/checkout-success`,
      cancel_url: `${req.protocol}://${req.get('host')}/doctors/${doctor.id}`,
      customer_email: user.email,
      client_reference_id: req.params.doctorId,
      line_items: [
        {
          price_data: {
            currency: 'inr',
            unit_amount: doctor.ticketPrice * 100,
            product_data: {
              name: doctor.name,
              description: doctor.bio || "Online doctor consultation",
              images: [doctor.photo]
            }
          },
          quantity: 1
        }
      ]
    })

    const booking = new BookingSchema({
      doctor: doctor._id,
      user: user._id,
      ticketPrice: doctor.ticketPrice,
      appointmentDate: new Date()
    })
    await booking.save()
    res.status(200).json({ success: true, message: 'Checkout session created successfully', session })

  } catch (err) {

    console.log(err);
    res.status(500).json({ success: false, message: 'Failed to create checkout session' });
  }
}