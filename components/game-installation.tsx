import { CardFooter } from "@/components/ui/card";
import {
  CheckCircle,
  Download,
  Settings,
  HardDrive,
  Cpu,
  Shield,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FAQCompact } from "./faq-compact";

export function GameInstallation() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">
                Professional Game Installation
              </h2>
              <p className="text-muted-foreground">
                Our expert technicians can handle the installation of any game
                on any platform. We ensure your games are properly installed,
                optimized, and ready to play without any technical issues.
              </p>
            </div>
            <ul className="grid gap-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Installation for all gaming platforms</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Game optimization for best performance</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>DLC and update installation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Troubleshooting common installation issues</span>
              </li>
            </ul>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="/contact">Schedule Installation</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[300px] w-full md:h-[400px] rounded-lg overflow-hidden">
              <video
                src="/8382844-hd_1080_1920_25fps.mp4"
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
            Our Installation Services
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Download className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Basic Installation</CardTitle>
                  <CardDescription>
                    Game installation on your device
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We'll install your games on your preferred device, ensuring
                  they're properly set up and ready to play without any
                  technical issues.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Settings className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Optimization Service</CardTitle>
                  <CardDescription>Get the best performance</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our optimization service ensures your games run at their best
                  by configuring graphics settings, updating drivers, and
                  optimizing system resources.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <HardDrive className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Storage Management</CardTitle>
                  <CardDescription>Organize your game library</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We'll help you manage your game storage efficiently,
                  organizing your library and ensuring you have enough space for
                  all your favorite titles.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Cpu className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>System Requirements Check</CardTitle>
                  <CardDescription>Ensure compatibility</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We'll check your system against game requirements to ensure
                  compatibility and recommend any necessary upgrades to improve
                  your gaming experience.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Shield className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Troubleshooting</CardTitle>
                  <CardDescription>Fix installation problems</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Having issues with game installation? Our experts can diagnose
                  and fix common installation problems, ensuring your games work
                  properly.
                </p>
              </CardContent>
            </Card>
            <Card className="flex flex-col justify-between">
              <CardHeader>
                <CardTitle>Custom Installation</CardTitle>
                <CardDescription>Tailored to your needs</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Need something specific? We offer custom installation services
                  tailored to your unique gaming setup and requirements.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/contact">Contact for Details</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">
                Installation FAQs
              </h2>
              <p className="max-w-[900px] text-muted-foreground">
                Common questions about our game installation services.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl py-12">
            <FAQCompact category="installation" limit={3} />
          </div>
        </div>
      </div>
    </section>
  );
}
