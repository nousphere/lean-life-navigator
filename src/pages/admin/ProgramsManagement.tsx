import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Edit, Trash2, Plus, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export function ProgramsManagement() {
  const [programs, setPrograms] = useState([
    {
      id: "1",
      name: "Weight Watchers",
      category: "Traditional Programs",
      monthlyPrice: 59,
      websiteUrl: "https://weightwatchers.com",
      description: "Points-based weight loss program with community support"
    },
    {
      id: "2", 
      name: "Noom",
      category: "Traditional Programs",
      monthlyPrice: 70,
      websiteUrl: "https://noom.com",
      description: "Psychology-based approach to weight loss with app tracking"
    },
    {
      id: "3",
      name: "Semaglutide (Ozempic)",
      category: "Medications",
      monthlyPrice: 850,
      websiteUrl: "https://example-pharmacy.com",
      description: "GLP-1 receptor agonist medication for weight management"
    }
  ]);
  
  const { toast } = useToast();

  const handleDelete = (id: string) => {
    setPrograms(prev => prev.filter(program => program.id !== id));
    toast({ title: "Program deleted successfully" });
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Programs Management</h1>
          <p className="text-muted-foreground">Manage weight loss programs and services</p>
        </div>
        <Button asChild>
          <Link to="/admin/programs/new">
            <Plus className="mr-2 h-4 w-4" />
            Add Program
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {programs.map((program) => (
          <Card key={program.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{program.name}</CardTitle>
                  <Badge variant="secondary" className="mt-1">
                    {program.category}
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <Link to={`/admin/programs/${program.id}/edit`}>
                      <Edit className="h-3 w-3" />
                    </Link>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDelete(program.id)}
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{program.description}</p>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Monthly Price:</span>
                  <span className="text-sm">${program.monthlyPrice}</span>
                </div>
                
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="w-full"
                  asChild
                >
                  <a href={program.websiteUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-3 w-3" />
                    Visit Website
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {programs.length === 0 && (
        <Card>
          <CardContent className="text-center py-8">
            <p className="text-muted-foreground mb-4">No programs found</p>
            <Button asChild>
              <Link to="/admin/programs/new">
                <Plus className="mr-2 h-4 w-4" />
                Add Your First Program
              </Link>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}