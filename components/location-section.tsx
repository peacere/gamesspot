export function LocationSection() {
  return (
    <section id="location" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Location</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Visit us at our headquarters or reach out through our contact channels.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-5xl py-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="flex flex-col space-y-4">
              <h3 className="text-2xl font-bold">Address</h3>
              <p className="text-muted-foreground">
                123 Gaming Street
                <br />
                Game City, GC 12345
                <br />
                Country
              </p>
              <h3 className="text-2xl font-bold">Hours</h3>
              <p className="text-muted-foreground">
                Monday - Friday: 9am - 5pm
                <br />
                Saturday: 10am - 4pm
                <br />
                Sunday: Closed
              </p>
            </div>
            <div className="relative h-[300px] w-full rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Game store location and storefront"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center text-white font-semibold">
                Visit Our Store
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
