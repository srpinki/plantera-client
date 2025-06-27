import { FaStar, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Plant Enthusiast",
    img: "https://i.pravatar.cc/100?img=32",
    rating: 5,
    quote:
      "Plantera has transformed my plant care routine! The reminders and care guides are incredibly helpful. My plants have never looked better!",
  },
  {
    name: "Mike Chen",
    role: "Beginner Plant Parent",
    img: "https://i.pravatar.cc/100?img=12",
    rating: 5,
    quote:
      "As someone who killed every plant I touched, Plantera’s beginner guides gave me the confidence to try again. Now I have a thriving plant collection!",
  },
  {
    name: "Emma Davis",
    role: "Interior Designer",
    img: "https://i.pravatar.cc/100?img=20",
    rating: 5,
    quote:
      "The plant recommendations are spot-on for different spaces and lighting conditions. My clients love the green transformations we create together.",
  },
  {
    name: "Alex Rodriguez",
    role: "Urban Gardener",
    img: "https://i.pravatar.cc/100?img=5",
    rating: 5,
    quote:
      "Living in a small apartment, space is limited. Plantera helped me choose the perfect plants that thrive in my urban environment.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 lg:py-16 w-11/12 mx-auto">
      <div className="max-w-7xl mx-auto text-center">
        <div className="badge badge-secondary mb-3 text-white">🌿 Testimonials</div>
        <h2 className="text-4xl font-bold mb-2">What Our Plant Parents Say</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Join thousands of happy plant parents who’ve transformed their spaces with Plantera’s expert guidance.
        </p>

        <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="card bg-white shadow-sm border border-base-200 rounded-lg p-4 text-left relative"
            >
              <FaQuoteRight className="absolute top-4 right-4 text-gray-500 opacity-20 text-xl" />
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{t.name}</h3>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>

              <div className="flex gap-1 text-yellow-500 mb-2">
                {[...Array(t.rating)].map((_, idx) => (
                  <FaStar key={idx} />
                ))}
              </div>

              <p className="text-sm text-accent">"{t.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
