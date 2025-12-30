import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap } from "lucide-react";
import { Link } from "wouter";

interface ProductProps {
  id: string;
  name: string;
  price: string;
  power: string;
  type: string;
  image: string;
}

export function ProductCard({ id, name, price, power, type, image }: ProductProps) {
  return (
    <Card className="overflow-hidden group flex flex-col h-full border-slate-200">
      <div className="relative aspect-square overflow-hidden bg-slate-100">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <Badge className="absolute top-3 left-3 bg-white/90 text-slate-900 hover:bg-white/90 backdrop-blur-sm">
          {type}
        </Badge>
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-1 font-heading text-lg">{name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 space-y-2">
        <div className="flex items-center text-sm text-slate-500">
          <Zap className="mr-2 h-4 w-4 text-secondary" />
          {power} Output
        </div>
        <div className="text-2xl font-bold text-primary">
          {price}
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/contact?product=${id}`} className="w-full">
          <Button className="w-full bg-slate-900 hover:bg-slate-800">
            Request Quote
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
