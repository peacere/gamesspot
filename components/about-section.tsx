export function AboutSection() {
  return (
    <section
      id="about"
      className="w-full py-12 md:py-24 lg:py-32 bg-background"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                About Game
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Game is a leading company in the gaming industry. We specialize
                in selling all types of games, providing PlayStation
                customization services, and offering professional game
                installation.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide gamers with access to the latest games and services,
                ensuring an enhanced gaming experience through our technical
                expertise and customer-focused approach.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the go-to destination for all gaming needs, known for our
                comprehensive game selection, technical expertise, and
                exceptional customer service.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <video
                src="/2928382-hd_1920_1080_30fps.mp4"
                className="w-full h-full object-cover rounded-lg"
                autoPlay
                loop
                muted
                playsInline
              ></video>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">
            Why Choose Us
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="rounded-full bg-primary/10 p-4">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2v20" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Competitive Pricing</h3>
              <p className="text-muted-foreground">
                We offer the best prices on games and services, ensuring you get
                the most value for your money.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="rounded-full bg-primary/10 p-4">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Technical Expertise</h3>
              <p className="text-muted-foreground">
                Our team of experts has extensive knowledge and experience in
                all aspects of gaming and console modifications.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="rounded-full bg-primary/10 p-4">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Customer Satisfaction</h3>
              <p className="text-muted-foreground">
                We prioritize customer satisfaction and strive to exceed
                expectations with every service we provide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
