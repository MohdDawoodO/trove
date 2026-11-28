import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="p-8">
        <CardContent className="flex flex-col gap-2">
          <Button variant="outline" size="lg" className="p-4 text-base">
            Continue with Google
          </Button>
          <Button variant="outline" size="lg" className="p-4 text-base">
            Continue with Github
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
