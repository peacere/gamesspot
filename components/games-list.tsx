import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function GamesList() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="all">All Games</TabsTrigger>
            <TabsTrigger value="playstation">PlayStation</TabsTrigger>
            <TabsTrigger value="xbox">Xbox</TabsTrigger>
            <TabsTrigger value="nintendo">Nintendo</TabsTrigger>
            <TabsTrigger value="pc">PC</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <GameCard
                platform="PlayStation"
                gameTitle="Spider-Man 2"
                image="/images/spider-man-2.jpg"
              />
              <GameCard
                platform="Xbox"
                gameTitle="Halo Infinite"
                image="/images/Halo_Infinite.png"
              />
              <GameCard
                platform="Nintendo"
                gameTitle="Zelda: Tears of the Kingdom"
                image="/images/Zelda-Tears-Of-The-Kingdom-Culture-TotK_3rd_54.webp"
              />
              <GameCard
                platform="PC"
                gameTitle="Cyberpunk 2077"
                image="/images/Cyberpunk_2077_box_art.jpg"
              />
              <GameCard
                platform="PlayStation"
                gameTitle="God of War Ragnarök"
                image="/images/God_of_War_Ragnarök_cover.jpg"
              />
              <GameCard
                platform="Xbox"
                gameTitle="Forza Horizon 5"
                image="/images/ForzaHorizion.jpg"
              />
              <GameCard
                platform="Nintendo"
                gameTitle="Super Mario Odyssey"
                image="/images/marioodyssey.jpg"
              />
              <GameCard
                platform="PC"
                gameTitle="Elden Ring"
                image="/images/enderR.jpg"
              />
            </div>
          </TabsContent>
          <TabsContent value="playstation" className="mt-0">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <GameCard
                platform="PlayStation"
                gameTitle="Spider-Man 2"
                image="/images/spider-man-2.jpg"
              />
              <GameCard
                platform="PlayStation"
                gameTitle="God of War Ragnarök"
                image="/images/God_of_War_Ragnarök_cover.jpg"
              />
              <GameCard
                platform="PlayStation"
                gameTitle="The Last of Us Part II"
                image="/images/the-last-of-us.jpg"
              />
              <GameCard
                platform="PlayStation"
                gameTitle="Horizon Forbidden West"
                image="/images/Games-Horizon-Forbidden-West-2.webp"
              />
            </div>
          </TabsContent>
          <TabsContent value="xbox" className="mt-0">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <GameCard
                platform="Xbox"
                gameTitle="Halo Infinite"
                image="/images/Halo_Infinite.png"
              />
              <GameCard
                platform="Xbox"
                gameTitle="Forza Horizon 5"
                image="/images/ForzaHorizion.jpg"
              />
              <GameCard
                platform="Xbox"
                gameTitle="Gears 5"
                image="/images/Gear5.jpg"
              />
              <GameCard
                platform="Xbox"
                gameTitle="Microsoft Flight Simulator"
                image="/images/microsoft-flight-simulator-2020-08-24-14-13-58-moment4.webp"
              />
            </div>
          </TabsContent>
          <TabsContent value="nintendo" className="mt-0">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <GameCard
                platform="Nintendo"
                gameTitle="Zelda: Tears of the Kingdom"
                image="/images/Zelda-Tears-Of-The-Kingdom-Culture-TotK_3rd_54.webp"
              />
              <GameCard
                platform="Nintendo"
                gameTitle="Super Mario Odyssey"
                image="/images/marioodyssey.jpg"
              />
              <GameCard
                platform="Nintendo"
                gameTitle="Mario Kart 8 Deluxe"
                image="/images/mariokart8deluxe.webp"
              />
              <GameCard
                platform="Nintendo"
                gameTitle="Animal Crossing"
                image="/images/Animal_Crossing_New_Horizons.jpg"
              />
            </div>
          </TabsContent>
          <TabsContent value="pc" className="mt-0">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <GameCard
                platform="PC"
                gameTitle="Cyberpunk 2077"
                image="/images/Cyberpunk_2077_box_art.jpg"
              />
              <GameCard
                platform="PC"
                gameTitle="Elden Ring"
                image="/images/enderR.jpg"
              />
              <GameCard
                platform="PC"
                gameTitle="Counter-Strike 2"
                image="/images/counter2.jpg"
              />
              <GameCard
                platform="PC"
                gameTitle="Baldur's Gate 3"
                image="/images/Baldur's_Gate_3_cover_art.jpg"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

function GameCard({
  platform,
  gameTitle,
  image,
}: {
  platform: string;
  gameTitle?: string;
  image?: string;
}) {
  const gameNames = {
    PlayStation: [
      "Spider-Man 2",
      "God of War Ragnarök",
      "The Last of Us Part II",
      "Horizon Forbidden West",
    ],
    Xbox: [
      "Halo Infinite",
      "Forza Horizon 5",
      "Gears 5",
      "Microsoft Flight Simulator",
    ],
    Nintendo: [
      "The Legend of Zelda: Tears of the Kingdom",
      "Super Mario Odyssey",
      "Mario Kart 8 Deluxe",
      "Animal Crossing",
    ],
    PC: ["Cyberpunk 2077", "Elden Ring", "Counter-Strike 2", "Baldur's Gate 3"],
  };

  const randomGameName =
    gameTitle ||
    gameNames[platform as keyof typeof gameNames]?.[
      Math.floor(Math.random() * 4)
    ] ||
    "Game Title";

  return (
    <Card className="overflow-hidden">
      <div className="h-48 bg-muted flex items-center justify-center">
        <img
          src={image || "/placeholder.svg?height=192&width=300"}
          alt={`${randomGameName} game cover`}
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{randomGameName}</span>
          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
            {platform}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Experience amazing gameplay with {randomGameName}. Features stunning
          graphics, immersive storyline, and exciting gameplay mechanics.
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">View Details</Button>
      </CardFooter>
    </Card>
  );
}
