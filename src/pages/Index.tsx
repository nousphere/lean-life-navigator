
import React from 'react';
import QuestionnaireContainer from '@/components/QuestionnaireContainer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Weight Loss Program Finder</h1>
              <p className="mt-1 text-sm text-gray-500">
                Find the perfect weight loss program that matches your preferences and needs
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="py-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white shadow sm:rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-2">How it works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4 rounded-lg bg-gray-50">
                <div className="bg-primary/10 rounded-full w-10 h-10 mx-auto mb-3 flex items-center justify-center">
                  <span className="text-primary font-semibold">1</span>
                </div>
                <h3 className="font-medium mb-1">Answer Questions</h3>
                <p className="text-sm text-gray-500">Tell us about your preferences, history, and goals.</p>
              </div>
              <div className="p-4 rounded-lg bg-gray-50">
                <div className="bg-primary/10 rounded-full w-10 h-10 mx-auto mb-3 flex items-center justify-center">
                  <span className="text-primary font-semibold">2</span>
                </div>
                <h3 className="font-medium mb-1">Get Matched</h3>
                <p className="text-sm text-gray-500">Our algorithm finds programs tailored to your needs.</p>
              </div>
              <div className="p-4 rounded-lg bg-gray-50">
                <div className="bg-primary/10 rounded-full w-10 h-10 mx-auto mb-3 flex items-center justify-center">
                  <span className="text-primary font-semibold">3</span>
                </div>
                <h3 className="font-medium mb-1">Start Your Journey</h3>
                <p className="text-sm text-gray-500">Connect with the program that works best for you.</p>
              </div>
            </div>
          </div>

          <QuestionnaireContainer />
        </div>
      </main>

      <footer className="bg-white mt-12 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Weight Loss Program Finder. All recommendations are personalized based on your answers.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
