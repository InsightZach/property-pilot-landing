import React, { useState, useEffect } from 'react';
import { ExternalLink, Search } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ResourcesContent from '../components/ResourcesContent';
import CountyResources from '../components/CountyResources';
import CityTownshipResources from '../components/CityTownshipResources';
import PropertyTaxCalendar from '../components/PropertyTaxCalendar';

const ExternalLinkButton = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <Button variant="outline" className="flex items-center">
      {children}
      <ExternalLink className="ml-2 h-4 w-4" />
    </Button>
  </a>
);

const Resources = () => {
  const [cities, setCities] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Simulated API call to fetch city data
    const fetchCityData = async () => {
      // In a real scenario, this would be an API call to your backend
      const mockData = [
        {
          name: "Minneapolis",
          assessor: "City",
          appealProcess: "Local Board",
          deadline2025: "TBD",
        },
        {
          name: "St. Paul",
          assessor: "County",
          appealProcess: "Open Book",
          deadline2025: "TBD",
        },
        // Add more mock data as needed
      ];
      setCities(mockData);
    };

    fetchCityData();
  }, []);

  const filteredCities = cities.filter(city =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Minnesota Property Tax Resources</h1>
        <ResourcesContent />
        <PropertyTaxCalendar />
        <CountyResources />
        <CityTownshipResources 
          cities={filteredCities} 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
        />
      </main>
      <Footer />
    </div>
  );
};

export default Resources;