import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { X, Plus, Edit2, Save, Target, Settings, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { MatchingFactors, MATCHING_WEIGHTS } from "../../types/matchingFactors";

type Program = {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  website: string;
  features: string[];
  pros: string[];
  cons: string[];
  supportType: string[];
  dietType: string[];
  exerciseRequirement: 'low' | 'medium' | 'high';
  timeCommitment: 'minimal' | 'moderate' | 'significant';
  bestFor: string[];
  notSuitableFor: string[];
  matchingFactors?: MatchingFactors;
  adminNotes?: string;
};

// Available options for matching factors
const MATCHING_OPTIONS = {
  primaryGoals: ['weight-loss', 'muscle-gain', 'maintenance', 'general-health'],
  secondaryGoals: ['energy-boost', 'better-sleep', 'confidence', 'habit-formation'],
  experienceLevel: ['beginner', 'intermediate', 'advanced', 'returning'],
  ageGroups: ['18-25', '26-35', '36-45', '46-55', '55+'],
  lifestyles: ['busy-professional', 'stay-at-home-parent', 'student', 'retiree', 'shift-worker'],
  supportTypes: ['group', 'one-on-one', 'self-guided', 'peer-support', 'professional-coach'],
  deliveryMethods: ['app-based', 'in-person', 'online-sessions', 'self-study', 'hybrid'],
  timeCommitments: ['minimal', 'moderate', 'intensive', 'flexible'],
  dietTypes: ['balanced', 'low-carb', 'keto', 'intermittent-fasting', 'plant-based', 'mediterranean', 'flexible'],
  mealPrep: ['meal-delivery', 'batch-cooking', 'quick-meals', 'eating-out-friendly', 'family-friendly'],
  dietRestrictions: ['gluten-free', 'dairy-free', 'nut-free', 'vegetarian', 'vegan', 'kosher', 'halal'],
  exerciseTypes: ['cardio', 'strength-training', 'yoga', 'pilates', 'walking', 'swimming', 'cycling', 'home-workouts', 'gym-based'],
  exerciseIntensity: ['low-impact', 'moderate', 'high-intensity', 'variable'],
  fitnessLevel: ['sedentary', 'lightly-active', 'moderately-active', 'very-active'],
  budgetRanges: ['free', 'under-25', '25-50', '50-100', '100-200', '200+'],
  accessibility: ['wheelchair-accessible', 'mobility-friendly', 'vision-impaired-friendly', 'hearing-impaired-friendly'],
  technologyRequirements: ['smartphone-app', 'computer-access', 'wearable-device', 'basic-tech', 'no-tech-needed'],
  trackingMethods: ['calorie-counting', 'macro-tracking', 'portion-control', 'mindful-eating', 'no-tracking'],
  motivationStyles: ['social-accountability', 'self-motivated', 'gamification', 'rewards-based', 'education-focused'],
  personalityTypes: ['detail-oriented', 'big-picture', 'routine-lover', 'variety-seeker', 'goal-driven', 'process-focused'],
  timeframes: ['1-3-months', '3-6-months', '6-12-months', '12+-months', 'ongoing-lifestyle'],
  urgency: ['immediate-results', 'gradual-progress', 'long-term-health', 'special-event'],
  medicalConsiderations: ['diabetes-friendly', 'heart-healthy', 'pregnancy-safe', 'senior-friendly', 'injury-recovery'],
  socialFactors: ['family-involvement', 'workplace-support', 'community-based', 'solo-journey']
};

export function ProgramsManagement() {
  const { toast } = useToast();
  const [programs, setPrograms] = useState<Program[]>([
    {
      id: '1',
      name: 'Weight Watchers',
      description: 'Points-based system focusing on overall eating habits rather than restricting specific foods.',
      monthlyPrice: 59,
      website: 'https://www.weightwatchers.com',
      features: ['Points-based system', 'Mobile app', 'Group meetings', 'Online community support'],
      pros: ['No foods are off-limits', 'Strong community support', 'Scientifically backed approach'],
      cons: ['Points tracking can be tedious', 'Results may be slower than other programs'],
      supportType: ['group', 'app'],
      dietType: ['balanced', 'flexible'],
      exerciseRequirement: 'medium',
      timeCommitment: 'moderate',
      bestFor: ['sustainable', 'first-time', 'group'],
      notSuitableFor: ['quick', 'independent'],
      matchingFactors: {
        primaryGoals: ['weight-loss'],
        secondaryGoals: ['habit-formation', 'confidence'],
        experienceLevel: ['beginner', 'intermediate'],
        ageGroups: ['26-35', '36-45', '46-55'],
        lifestyles: ['busy-professional', 'stay-at-home-parent'],
        supportTypes: ['group', 'peer-support'],
        deliveryMethods: ['app-based', 'in-person', 'hybrid'],
        timeCommitments: ['moderate'],
        dietTypes: ['balanced', 'flexible'],
        mealPrep: ['family-friendly', 'eating-out-friendly'],
        dietRestrictions: [],
        exerciseTypes: ['walking', 'cardio'],
        exerciseIntensity: ['moderate'],
        fitnessLevel: ['lightly-active', 'moderately-active'],
        budgetRanges: ['25-50', '50-100'],
        accessibility: [],
        technologyRequirements: ['smartphone-app'],
        trackingMethods: ['portion-control'],
        motivationStyles: ['social-accountability', 'education-focused'],
        personalityTypes: ['routine-lover', 'goal-driven'],
        timeframes: ['3-6-months', '6-12-months'],
        urgency: ['gradual-progress'],
        medicalConsiderations: [],
        socialFactors: ['community-based']
      },
      adminNotes: 'Most popular program for beginners, strong retention rates'
    }
  ]);

  const [editingProgram, setEditingProgram] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);

  const [newProgram, setNewProgram] = useState<Partial<Program>>({
    name: '',
    description: '',
    monthlyPrice: 0,
    website: '',
    features: [],
    pros: [],
    cons: [],
    supportType: [],
    dietType: [],
    exerciseRequirement: 'medium',
    timeCommitment: 'moderate',
    bestFor: [],
    notSuitableFor: [],
    matchingFactors: {
      primaryGoals: [],
      secondaryGoals: [],
      experienceLevel: [],
      ageGroups: [],
      lifestyles: [],
      supportTypes: [],
      deliveryMethods: [],
      timeCommitments: [],
      dietTypes: [],
      mealPrep: [],
      dietRestrictions: [],
      exerciseTypes: [],
      exerciseIntensity: [],
      fitnessLevel: [],
      budgetRanges: [],
      accessibility: [],
      technologyRequirements: [],
      trackingMethods: [],
      motivationStyles: [],
      personalityTypes: [],
      timeframes: [],
      urgency: [],
      medicalConsiderations: [],
      socialFactors: []
    },
    adminNotes: ''
  });

  const addProgram = () => {
    if (!newProgram.name || !newProgram.description) {
      toast({ title: "Please fill in required fields", variant: "destructive" });
      return;
    }

    const program: Program = {
      id: Date.now().toString(),
      name: newProgram.name,
      description: newProgram.description,
      monthlyPrice: newProgram.monthlyPrice || 0,
      website: newProgram.website || '',
      features: newProgram.features || [],
      pros: newProgram.pros || [],
      cons: newProgram.cons || [],
      supportType: newProgram.supportType || [],
      dietType: newProgram.dietType || [],
      exerciseRequirement: newProgram.exerciseRequirement || 'medium',
      timeCommitment: newProgram.timeCommitment || 'moderate',
      bestFor: newProgram.bestFor || [],
      notSuitableFor: newProgram.notSuitableFor || [],
      matchingFactors: newProgram.matchingFactors || {
        primaryGoals: [], secondaryGoals: [], experienceLevel: [], ageGroups: [], lifestyles: [],
        supportTypes: [], deliveryMethods: [], timeCommitments: [], dietTypes: [], mealPrep: [],
        dietRestrictions: [], exerciseTypes: [], exerciseIntensity: [], fitnessLevel: [],
        budgetRanges: [], accessibility: [], technologyRequirements: [], trackingMethods: [],
        motivationStyles: [], personalityTypes: [], timeframes: [], urgency: [],
        medicalConsiderations: [], socialFactors: []
      },
      adminNotes: newProgram.adminNotes || ''
    };

    setPrograms(prev => [...prev, program]);
    setNewProgram({
      name: '', description: '', monthlyPrice: 0, website: '', features: [], pros: [], cons: [],
      supportType: [], dietType: [], exerciseRequirement: 'medium', timeCommitment: 'moderate',
      bestFor: [], notSuitableFor: [], matchingFactors: {
        primaryGoals: [], secondaryGoals: [], experienceLevel: [], ageGroups: [], lifestyles: [],
        supportTypes: [], deliveryMethods: [], timeCommitments: [], dietTypes: [], mealPrep: [],
        dietRestrictions: [], exerciseTypes: [], exerciseIntensity: [], fitnessLevel: [],
        budgetRanges: [], accessibility: [], technologyRequirements: [], trackingMethods: [],
        motivationStyles: [], personalityTypes: [], timeframes: [], urgency: [],
        medicalConsiderations: [], socialFactors: []
      }, adminNotes: ''
    });
    setShowAddForm(false);
    toast({ title: "Program added successfully" });
  };

  const deleteProgram = (id: string) => {
    setPrograms(prev => prev.filter(p => p.id !== id));
    toast({ title: "Program deleted successfully" });
  };

  const updateMatchingFactor = (programId: string, factorKey: keyof MatchingFactors, values: string[]) => {
    setPrograms(prev => prev.map(program => 
      program.id === programId 
        ? {
            ...program,
            matchingFactors: {
              ...program.matchingFactors!,
              [factorKey]: values
            }
          }
        : program
    ));
  };

  const MatchingFactorsEditor = ({ program }: { program: Program }) => (
    <div className="space-y-6">
      {Object.entries(MATCHING_OPTIONS).map(([key, options]) => (
        <div key={key} className="space-y-2">
          <Label className="text-sm font-medium capitalize">
            {key.replace(/([A-Z])/g, ' $1').trim()}
            {key in MATCHING_WEIGHTS && (
              <Badge variant="outline" className="ml-2">
                Weight: {MATCHING_WEIGHTS[key as keyof typeof MATCHING_WEIGHTS]}%
              </Badge>
            )}
          </Label>
          <div className="flex flex-wrap gap-2">
            {options.map(option => (
              <div key={option} className="flex items-center space-x-2">
                <Checkbox
                  id={`${program.id}-${key}-${option}`}
                  checked={program.matchingFactors?.[key as keyof MatchingFactors]?.includes(option) || false}
                  onCheckedChange={(checked) => {
                    const currentValues = program.matchingFactors?.[key as keyof MatchingFactors] || [];
                    const newValues = checked 
                      ? [...currentValues, option]
                      : currentValues.filter(v => v !== option);
                    updateMatchingFactor(program.id, key as keyof MatchingFactors, newValues);
                  }}
                />
                <Label 
                  htmlFor={`${program.id}-${key}-${option}`} 
                  className="text-xs capitalize cursor-pointer"
                >
                  {option.replace(/-/g, ' ')}
                </Label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Programs Management</h1>
          <p className="text-muted-foreground">Manage weight loss programs and their matching factors</p>
        </div>
        <Button onClick={() => setShowAddForm(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Program
        </Button>
      </div>

      {showAddForm && (
        <Card>
          <CardHeader>
            <CardTitle>Add New Program</CardTitle>
            <CardDescription>Create a new program with matching factors</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Program Name*</Label>
                <Input
                  value={newProgram.name}
                  onChange={(e) => setNewProgram(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="e.g., Weight Watchers"
                />
              </div>
              <div>
                <Label>Monthly Price</Label>
                <Input
                  type="number"
                  value={newProgram.monthlyPrice}
                  onChange={(e) => setNewProgram(prev => ({ ...prev, monthlyPrice: parseInt(e.target.value) || 0 }))}
                  placeholder="59"
                />
              </div>
            </div>
            <div>
              <Label>Description*</Label>
              <Textarea
                value={newProgram.description}
                onChange={(e) => setNewProgram(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Brief description of the program"
              />
            </div>
            <div>
              <Label>Website URL</Label>
              <Input
                value={newProgram.website}
                onChange={(e) => setNewProgram(prev => ({ ...prev, website: e.target.value }))}
                placeholder="https://example.com"
              />
            </div>
            <div>
              <Label>Admin Notes</Label>
              <Textarea
                value={newProgram.adminNotes}
                onChange={(e) => setNewProgram(prev => ({ ...prev, adminNotes: e.target.value }))}
                placeholder="Internal notes about this program"
              />
            </div>
            <div className="flex gap-2">
              <Button onClick={addProgram}>
                <Save className="mr-2 h-4 w-4" />
                Add Program
              </Button>
              <Button variant="outline" onClick={() => setShowAddForm(false)}>
                <X className="mr-2 h-4 w-4" />
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="space-y-6">
        {programs.map(program => (
          <Card key={program.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    {program.name}
                    <Badge variant="secondary">${program.monthlyPrice}/mo</Badge>
                  </CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href={program.website} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setEditingProgram(editingProgram === program.id ? null : program.id)}
                  >
                    <Settings className="h-3 w-3" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => deleteProgram(program.id)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            {editingProgram === program.id && (
              <CardContent>
                <Tabs defaultValue="matching-factors">
                  <TabsList>
                    <TabsTrigger value="matching-factors">
                      <Target className="mr-2 h-4 w-4" />
                      Matching Factors
                    </TabsTrigger>
                    <TabsTrigger value="basic-info">Basic Info</TabsTrigger>
                  </TabsList>
                  <TabsContent value="matching-factors" className="space-y-4">
                    <MatchingFactorsEditor program={program} />
                  </TabsContent>
                  <TabsContent value="basic-info" className="space-y-4">
                    <div>
                      <Label>Admin Notes</Label>
                      <Textarea
                        value={program.adminNotes || ''}
                        onChange={(e) => {
                          setPrograms(prev => prev.map(p => 
                            p.id === program.id ? { ...p, adminNotes: e.target.value } : p
                          ));
                        }}
                        placeholder="Internal notes about this program"
                      />
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            )}
          </Card>
        ))}
      </div>

      {programs.length === 0 && !showAddForm && (
        <Card>
          <CardContent className="text-center py-8">
            <p className="text-muted-foreground mb-4">No programs found</p>
            <Button onClick={() => setShowAddForm(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Add Your First Program
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}