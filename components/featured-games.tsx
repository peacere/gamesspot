import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export function FeaturedGames() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Featured Games
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out our most popular and latest game releases across all
              platforms.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          <Card className="overflow-hidden">
            <Badge className="absolute top-4 right-4 z-10 bg-red-500">
              New Release
            </Badge>
            <div className="h-48 bg-muted flex items-center justify-center overflow-hidden">
              <img
                src="/images/spider-man-2.jpg"
                alt="Spider-Man 2"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Spider-Man 2</span>
                <Badge variant="outline">PS5</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Experience the incredible power of Spider-Man in this epic
                adventure through New York City.
              </p>
              <p className="text-lg font-bold text-primary mt-2">$69.99</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Add to Cart</Button>
            </CardFooter>
          </Card>

          <Card className="overflow-hidden">
            <Badge className="absolute top-4 right-4 z-10 bg-green-500">
              Best Seller
            </Badge>
            <div className="h-48 bg-muted flex items-center justify-center overflow-hidden">
              <img
                src="/images/elden-ring.png"
                alt="Elden Ring"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Elden Ring</span>
                <Badge variant="outline">PC</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Explore a vast fantasy world created by Hidetaka Miyazaki and
                George R.R. Martin.
              </p>
              <p className="text-lg font-bold text-primary mt-2">$59.99</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Add to Cart</Button>
            </CardFooter>
          </Card>

          <Card className="overflow-hidden">
            <Badge className="absolute top-4 right-4 z-10 bg-blue-500">
              Popular
            </Badge>
            <div className="h-48 bg-muted flex items-center justify-center overflow-hidden">
              <img
                src="/images/Zelda-Tears-Of-The-Kingdom-Culture-TotK_3rd_54.webp"
                alt="Zelda: Tears of the Kingdom"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Zelda: Tears of the Kingdom</span>
                <Badge variant="outline">Switch</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Explore the vast kingdom of Hyrule in this breathtaking sequel
                to Breath of the Wild.
              </p>
              <p className="text-lg font-bold text-primary mt-2">$69.99</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Add to Cart</Button>
            </CardFooter>
          </Card>

          <Card className="overflow-hidden">
            <Badge className="absolute top-4 right-4 z-10 bg-orange-500">
              Sale
            </Badge>
            <div className="h-48 bg-muted flex items-center justify-center overflow-hidden">
              <img
                src="/images/Cyberpunk_2077_box_art.jpg"
                alt="Cyberpunk 2077"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Cyberpunk 2077</span>
                <Badge variant="outline">PC</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Immerse yourself in the dark future of Night City in this
                open-world RPG.
              </p>
              <div className="flex items-center gap-2 mt-2">
                <p className="text-lg font-bold text-primary">$39.99</p>
                <p className="text-sm text-muted-foreground line-through">
                  $59.99
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Add to Cart</Button>
            </CardFooter>
          </Card>
        </div>
        <div className="text-center mt-8">
          <Button size="lg" asChild>
            <Link href="/games">View All Games</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
