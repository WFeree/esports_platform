import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { TrophyIcon } from "lucide-react"
import Image from "next/image"

const page = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <Card className="w-100">
        <CardHeader className="w-full flex flex-col items-center">
          <CardTitle className="text-2xl">Bejelentkezés</CardTitle>
          <CardDescription>Csatlakozz és légy te a következő bajnok!</CardDescription>
        </CardHeader>
        <CardContent>
          <Button size={"lg"}>
            <Image src="discord-dark.svg" alt="discord" width={24} height={24}></Image>
            <span>Folytatás Discord fiókkal</span>
          </Button>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <div className="flex items-center justify-center gap-4 w-full">
            <Separator className="flex-1"></Separator>
            <span className="text-muted-foreground">Biztonságos OAuth</span>
            <Separator className="flex-1"></Separator>
          </div>
          <Badge variant={"outline"} className="p-4 gap-2 flex items-center">
            <TrophyIcon />
            Valorant
          </Badge>
        </CardFooter>
      </Card>
    </div>
  )
}

export default page