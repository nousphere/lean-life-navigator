import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Edit, Trash2, ChevronDown, ChevronRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { programs as allPrograms } from "@/data/programs";

interface ProgramVariation {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  features: string[];
}

interface Program {
  id: string;
  name: string;
  description: string;
  websiteUrl: string;
  variations: ProgramVariation[];
}

interface Category {
  id: string;
  name: string;
  description: string;
  programs: Program[];
}

// Helper function to convert programs to category format
const convertProgramToCategory = (program: typeof allPrograms[0]): Program => ({
  id: program.id,
  name: program.name,
  description: program.description,
  websiteUrl: program.website,
  variations: [
    {
      id: `${program.id}-main`,
      name: program.name,
      description: program.description,
      monthlyPrice: program.monthlyPrice,
      features: program.features
    }
  ]
});

export function CategoriesManagement() {
  const [categories, setCategories] = useState<Category[]>([
    {
      id: "1",
      name: "Commercial Programs",
      description: "Established commercial weight loss programs with community support",
      programs: [
        'weight-watchers',
        'noom', 
        'nutrisystem',
        'jenny-craig'
      ].map(id => {
        const program = allPrograms.find(p => p.id === id);
        return program ? convertProgramToCategory(program) : null;
      }).filter(Boolean) as Program[]
    },
    {
      id: "2",
      name: "Diet-Specific Programs",
      description: "Programs focused on specific dietary approaches and eating patterns",
      programs: [
        'keto-diet',
        'paleo-diet',
        'mediterranean-diet',
        'whole30',
        'intermittent-fasting'
      ].map(id => {
        const program = allPrograms.find(p => p.id === id);
        return program ? convertProgramToCategory(program) : null;
      }).filter(Boolean) as Program[]
    },
    {
      id: "3",
      name: "Fitness & Training Programs",
      description: "Exercise-focused programs with personal training and group fitness",
      programs: [
        'personal-trainer',
        'beachbody',
        'orangetheory'
      ].map(id => {
        const program = allPrograms.find(p => p.id === id);
        return program ? convertProgramToCategory(program) : null;
      }).filter(Boolean) as Program[]
    },
    {
      id: "4",
      name: "Technology & App-Based",
      description: "Digital platforms and mobile apps for tracking and guidance",
      programs: [
        'myfitnesspal',
        'lose-it',
        'sparkpeople'
      ].map(id => {
        const program = allPrograms.find(p => p.id === id);
        return program ? convertProgramToCategory(program) : null;
      }).filter(Boolean) as Program[]
    },
    {
      id: "5",
      name: "Medical & Supervised Programs",
      description: "Doctor-supervised programs with medical oversight and prescription options",
      programs: [
        'calibrate',
        'found'
      ].map(id => {
        const program = allPrograms.find(p => p.id === id);
        return program ? convertProgramToCategory(program) : null;
      }).filter(Boolean) as Program[]
    },
    {
      id: "6",
      name: "Meal Delivery & Convenience",
      description: "Pre-prepared meals and meal kit services for convenient weight loss",
      programs: [
        'factor75',
        'hello-fresh-fit'
      ].map(id => {
        const program = allPrograms.find(p => p.id === id);
        return program ? convertProgramToCategory(program) : null;
      }).filter(Boolean) as Program[]
    }
  ]);
  
  const [showCategoryForm, setShowCategoryForm] = useState(false);
  const [showProgramForm, setShowProgramForm] = useState(false);
  const [showVariationForm, setShowVariationForm] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [editingProgram, setEditingProgram] = useState<Program | null>(null);
  const [editingVariation, setEditingVariation] = useState<ProgramVariation | null>(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("");
  const [selectedProgramId, setSelectedProgramId] = useState<string>("");
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(["1"]));
  
  const [categoryForm, setCategoryForm] = useState({ name: "", description: "" });
  const [programForm, setProgramForm] = useState({ name: "", description: "", websiteUrl: "" });
  const [variationForm, setVariationForm] = useState({ 
    name: "", 
    description: "", 
    monthlyPrice: 0, 
    features: [""] 
  });
  
  const { toast } = useToast();

  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  const handleCategorySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingCategory) {
      setCategories(prev => prev.map(cat => 
        cat.id === editingCategory.id 
          ? { ...cat, ...categoryForm }
          : cat
      ));
      toast({ title: "Category updated successfully" });
    } else {
      const newCategory: Category = {
        id: Date.now().toString(),
        ...categoryForm,
        programs: []
      };
      setCategories(prev => [...prev, newCategory]);
      toast({ title: "Category created successfully" });
    }
    setCategoryForm({ name: "", description: "" });
    setEditingCategory(null);
    setShowCategoryForm(false);
  };

  const handleProgramSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingProgram) {
      setCategories(prev => prev.map(cat => ({
        ...cat,
        programs: cat.programs.map(prog =>
          prog.id === editingProgram.id
            ? { ...prog, ...programForm }
            : prog
        )
      })));
      toast({ title: "Program updated successfully" });
    } else {
      const newProgram: Program = {
        id: Date.now().toString(),
        ...programForm,
        variations: []
      };
      
      setCategories(prev => prev.map(cat => 
        cat.id === selectedCategoryId
          ? { ...cat, programs: [...cat.programs, newProgram] }
          : cat
      ));
      toast({ title: "Program added successfully" });
    }
    
    setProgramForm({ name: "", description: "", websiteUrl: "" });
    setEditingProgram(null);
    setShowProgramForm(false);
    setSelectedCategoryId("");
  };

  const handleVariationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingVariation) {
      setCategories(prev => prev.map(cat => ({
        ...cat,
        programs: cat.programs.map(prog => ({
          ...prog,
          variations: prog.variations.map(variation =>
            variation.id === editingVariation.id
              ? { ...variation, ...variationForm, features: variationForm.features.filter(f => f.trim() !== "") }
              : variation
          )
        }))
      })));
      toast({ title: "Program variation updated successfully" });
    } else {
      const newVariation: ProgramVariation = {
        id: Date.now().toString(),
        ...variationForm,
        features: variationForm.features.filter(f => f.trim() !== "")
      };
      
      setCategories(prev => prev.map(cat => ({
        ...cat,
        programs: cat.programs.map(prog => 
          prog.id === selectedProgramId
            ? { ...prog, variations: [...prog.variations, newVariation] }
            : prog
        )
      })));
      toast({ title: "Program variation added successfully" });
    }
    
    setVariationForm({ name: "", description: "", monthlyPrice: 0, features: [""] });
    setEditingVariation(null);
    setShowVariationForm(false);
    setSelectedProgramId("");
  };

  const addFeatureField = () => {
    setVariationForm(prev => ({
      ...prev,
      features: [...prev.features, ""]
    }));
  };

  const updateFeature = (index: number, value: string) => {
    setVariationForm(prev => ({
      ...prev,
      features: prev.features.map((f, i) => i === index ? value : f)
    }));
  };

  const removeFeature = (index: number) => {
    setVariationForm(prev => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Categories & Programs Management</h1>
          <p className="text-muted-foreground">Manage weight loss program categories and their programs</p>
        </div>
        <Button onClick={() => setShowCategoryForm(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Category
        </Button>
      </div>

      {/* Category Form */}
      {showCategoryForm && (
        <Card>
          <CardHeader>
            <CardTitle>{editingCategory ? "Edit Category" : "Add New Category"}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCategorySubmit} className="space-y-4">
              <div>
                <Label htmlFor="categoryName">Category Name</Label>
                <Input
                  id="categoryName"
                  value={categoryForm.name}
                  onChange={(e) => setCategoryForm(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="e.g., Medical Weight Loss"
                  required
                />
              </div>
              <div>
                <Label htmlFor="categoryDescription">Description</Label>
                <Textarea
                  id="categoryDescription"
                  value={categoryForm.description}
                  onChange={(e) => setCategoryForm(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Describe this category..."
                  required
                />
              </div>
              <div className="flex gap-2">
                <Button type="submit">
                  {editingCategory ? "Update" : "Create"} Category
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => {
                    setShowCategoryForm(false);
                    setEditingCategory(null);
                    setCategoryForm({ name: "", description: "" });
                  }}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Program Form */}
      {showProgramForm && (
        <Card>
          <CardHeader>
            <CardTitle>{editingProgram ? "Edit Program" : "Add Program to Category"}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleProgramSubmit} className="space-y-4">
              <div>
                <Label htmlFor="programName">Program Name</Label>
                <Input
                  id="programName"
                  value={programForm.name}
                  onChange={(e) => setProgramForm(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="e.g., Weight Watchers"
                  required
                />
              </div>
              <div>
                <Label htmlFor="programDescription">Description</Label>
                <Textarea
                  id="programDescription"
                  value={programForm.description}
                  onChange={(e) => setProgramForm(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Describe this program..."
                  required
                />
              </div>
              <div>
                <Label htmlFor="programUrl">Website URL</Label>
                <Input
                  id="programUrl"
                  type="url"
                  value={programForm.websiteUrl}
                  onChange={(e) => setProgramForm(prev => ({ ...prev, websiteUrl: e.target.value }))}
                  placeholder="https://example.com"
                  required
                />
              </div>
              <div className="flex gap-2">
                <Button type="submit">{editingProgram ? "Update" : "Add"} Program</Button>
                 <Button 
                   type="button" 
                   variant="outline" 
                   onClick={() => {
                     setShowProgramForm(false);
                     setEditingProgram(null);
                     setProgramForm({ name: "", description: "", websiteUrl: "" });
                   }}
                 >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Variation Form */}
      {showVariationForm && (
        <Card>
          <CardHeader>
            <CardTitle>{editingVariation ? "Edit Program Variation" : "Add Program Variation"}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleVariationSubmit} className="space-y-4">
              <div>
                <Label htmlFor="variationName">Variation Name</Label>
                <Input
                  id="variationName"
                  value={variationForm.name}
                  onChange={(e) => setVariationForm(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="e.g., Weight Watchers Premium"
                  required
                />
              </div>
              <div>
                <Label htmlFor="variationDescription">Description</Label>
                <Textarea
                  id="variationDescription"
                  value={variationForm.description}
                  onChange={(e) => setVariationForm(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Describe this variation..."
                  required
                />
              </div>
              <div>
                <Label htmlFor="monthlyPrice">Monthly Price ($)</Label>
                <Input
                  id="monthlyPrice"
                  type="number"
                  min="0"
                  step="0.01"
                  value={variationForm.monthlyPrice}
                  onChange={(e) => setVariationForm(prev => ({ ...prev, monthlyPrice: parseFloat(e.target.value) || 0 }))}
                  required
                />
              </div>
              <div>
                <Label>Features</Label>
                {variationForm.features.map((feature, index) => (
                  <div key={index} className="flex gap-2 mt-2">
                    <Input
                      value={feature}
                      onChange={(e) => updateFeature(index, e.target.value)}
                      placeholder="Enter feature"
                    />
                    {variationForm.features.length > 1 && (
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => removeFeature(index)}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    )}
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addFeatureField}
                  className="mt-2"
                >
                  <Plus className="mr-2 h-3 w-3" />
                  Add Feature
                </Button>
              </div>
              <div className="flex gap-2">
                <Button type="submit">{editingVariation ? "Update" : "Add"} Variation</Button>
                 <Button 
                   type="button" 
                   variant="outline" 
                   onClick={() => {
                     setShowVariationForm(false);
                     setEditingVariation(null);
                     setVariationForm({ name: "", description: "", monthlyPrice: 0, features: [""] });
                   }}
                 >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Categories List */}
      <div className="space-y-4">
        {categories.map((category) => (
          <Card key={category.id}>
            <Collapsible 
              open={expandedCategories.has(category.id)}
              onOpenChange={() => toggleCategory(category.id)}
            >
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" className="flex items-center gap-2 p-0 h-auto">
                      {expandedCategories.has(category.id) ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                      <CardTitle className="text-lg">{category.name}</CardTitle>
                    </Button>
                  </CollapsibleTrigger>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        setSelectedCategoryId(category.id);
                        setShowProgramForm(true);
                      }}
                    >
                      <Plus className="h-3 w-3 mr-1" />
                      Add Program
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        setEditingCategory(category);
                        setCategoryForm({ name: category.name, description: category.description });
                        setShowCategoryForm(true);
                      }}
                    >
                      <Edit className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </CardHeader>
              
              <CollapsibleContent>
                <CardContent>
                  {category.programs.length > 0 ? (
                    <div className="space-y-4">
                      {category.programs.map((program) => (
                        <div key={program.id} className="border rounded-lg p-4">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h4 className="font-semibold">{program.name}</h4>
                              <p className="text-sm text-muted-foreground">{program.description}</p>
                              <a 
                                href={program.websiteUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-sm text-primary hover:underline"
                              >
                                {program.websiteUrl}
                              </a>
                            </div>
                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => {
                                  setEditingProgram(program);
                                  setProgramForm({
                                    name: program.name,
                                    description: program.description,
                                    websiteUrl: program.websiteUrl
                                  });
                                  setShowProgramForm(true);
                                }}
                              >
                                <Edit className="h-3 w-3 mr-1" />
                                Edit
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => {
                                  setSelectedProgramId(program.id);
                                  setShowVariationForm(true);
                                }}
                              >
                                <Plus className="h-3 w-3 mr-1" />
                                Add Variation
                              </Button>
                            </div>
                          </div>
                          
                          {program.variations.length > 0 && (
                            <div className="mt-3 space-y-2">
                              <h5 className="text-sm font-medium">Variations:</h5>
                              {program.variations.map((variation) => (
                                <div key={variation.id} className="bg-muted/50 rounded p-3">
                                  <div className="flex justify-between items-start">
                                    <div>
                                      <h6 className="font-medium">{variation.name}</h6>
                                      <p className="text-xs text-muted-foreground">{variation.description}</p>
                                      <p className="text-sm font-semibold">${variation.monthlyPrice}/month</p>
                                      <div className="mt-1">
                                        <span className="text-xs font-medium">Features: </span>
                                        <span className="text-xs">{variation.features.join(", ")}</span>
                                      </div>
                                    </div>
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      onClick={() => {
                                        setEditingVariation(variation);
                                        setVariationForm({
                                          name: variation.name,
                                          description: variation.description,
                                          monthlyPrice: variation.monthlyPrice,
                                          features: [...variation.features, ""]
                                        });
                                        setShowVariationForm(true);
                                      }}
                                    >
                                      <Edit className="h-3 w-3" />
                                    </Button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">No programs in this category yet.</p>
                  )}
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>
        ))}
      </div>
    </div>
  );
}