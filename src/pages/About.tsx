import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Clock, MapPin, Landmark } from "lucide-react";

const stats = [
  { icon: Clock, value: "20+", label: "Years of Experience" },
  { icon: Landmark, value: "150+", label: "Sites Conserved" },
  { icon: Users, value: "40+", label: "Expert Team Members" },
  { icon: MapPin, value: "12+", label: "States Covered" },
];

const About = () => {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <p className="text-accent text-sm uppercase tracking-widest mb-2 font-medium">Who We Are</p>
          <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
            <p className="text-muted-foreground leading-8 text-lg font-body">
              Itihas Art Conservation began with a simple but powerful realization — many artworks and heritage
              objects around us are quietly deteriorating, often without anyone noticing until the damage
              becomes irreversible.
              As an art conservator, I have always felt a deep emotional connection to historical objects. Every
              painting, sculpture, textile, or manuscript carries stories of people, traditions, and time.
              This led to the creation of Itihas Art Conservation — not only as a conservation practice, but also as a
              platform to educate, share knowledge, and spread awareness about heritage preservation.
              Alongside conservation work, we actively create educational content to make conservation more
              accessible and understandable to the public.
              Today, Itihas Art Conservation works with institutions, and private collectors while also creating
              content that inspires people to value and protect heritage.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 mt-12">

            <Card className="border-accent/20">
              <CardContent className="p-8">

                <Award className="h-8 w-8 text-accent mb-4" />

                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Our Mission
                </h3>

                <div className="text-muted-foreground leading-relaxed text-base space-y-4">
                  <p>
                    Our mission is to protect and promote cultural heritage through conservation, awareness, and education.
                  </p>

                  <p>We aim to:</p>

                  <ul className="list-disc pl-5 space-y-2">
                    <li>Provide professional conservation and restoration services</li>
                    <li>Encourage preventive care and responsible collection management</li>
                    <li>Support institutions and collectors in preserving their collections</li>
                    <li>Create educational content to spread awareness about conservation</li>
                    <li>Make heritage preservation more accessible to wider audiences</li>
                  </ul>

                  <p>
                    We believe conservation is not just about repairing damage — it is about safeguarding memory,
                    identity, and history.
                  </p>
                </div>

              </CardContent>
            </Card>

            <Card className="border-accent/20">
              <CardContent className="p-8">

                <Users className="h-8 w-8 text-accent mb-4" />

                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Our Vision
                </h3>

                <div className="text-muted-foreground leading-relaxed text-base space-y-4">
                  <p>
                    Our vision is to build a future where conservation becomes an essential part of how we care for heritage
                    and where people feel connected to the history around them.
                  </p>

                  <p>We aspire to:</p>

                  <ul className="list-disc pl-5 space-y-2">
                    <li>Become a trusted conservation partner for museums and heritage institutions</li>
                    <li>Increase awareness about art conservation in India through education and content creation</li>
                    <li>Encourage long-term preservation practices</li>
                    <li>Inspire people to value and protect cultural heritage</li>
                  </ul>

                  <p>
                    At Itihas Art Conservation, we preserve the past, educate the present, and inspire the future.
                  </p>
                </div>

              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <s.icon className="h-8 w-8 mx-auto mb-3 text-accent" />
                <p className="text-3xl font-bold text-foreground">{s.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
