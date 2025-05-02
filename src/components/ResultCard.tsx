
import React from 'react';
import { Program } from '../data/programs';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";

type ResultCardProps = {
  program: Program & { 
    score: number; 
    reasons: string[];
  };
  rank: number;
  isRecommended: boolean;
};

const ResultCard = ({ program, rank, isRecommended }: ResultCardProps) => {
  return (
    <Card className={`w-full transition-all duration-300 ${isRecommended ? 'border-primary shadow-md' : 'opacity-70'}`}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center mb-1">
          <CardTitle className="text-xl font-bold flex items-center">
            {isRecommended && <span className="mr-2 text-primary font-semibold">#{rank}</span>}
            {program.name}
          </CardTitle>
          <Badge variant={isRecommended ? "default" : "outline"} className={isRecommended ? "bg-primary" : ""}>
            {program.score.toFixed(0)}% Match
          </Badge>
        </div>
        <div className="text-sm text-muted-foreground">
          Monthly Cost: ${program.monthlyPrice}{program.monthlyPrice === 0 ? ' (Free)' : ''}
        </div>
      </CardHeader>
      
      <CardContent className="pb-4">
        <p className="text-base mb-4">{program.description}</p>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Key Features:</h4>
            <ul className="list-disc pl-5 space-y-1">
              {program.features.slice(0, 3).map((feature, idx) => (
                <li key={idx} className="text-sm">{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-2 flex items-center">
                <Check className="w-4 h-4 mr-1 text-secondary" />
                <span>Pros:</span>
              </h4>
              <ul className="list-disc pl-5 space-y-1">
                {program.pros.slice(0, 3).map((pro, idx) => (
                  <li key={idx} className="text-sm">{pro}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-2 flex items-center">
                <X className="w-4 h-4 mr-1 text-destructive" />
                <span>Cons:</span>
              </h4>
              <ul className="list-disc pl-5 space-y-1">
                {program.cons.slice(0, 3).map((con, idx) => (
                  <li key={idx} className="text-sm">{con}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-1">Why This {isRecommended ? 'Matches' : 'Doesn\'t Match'} You:</h4>
            <ul className="list-disc pl-5 space-y-1">
              {program.reasons.slice(0, 3).map((reason, idx) => (
                <li key={idx} className="text-sm">{reason}</li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button className="w-full" variant={isRecommended ? "default" : "outline"} asChild>
          <a href={program.website} target="_blank" rel="noopener noreferrer">
            Visit Website
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ResultCard;
