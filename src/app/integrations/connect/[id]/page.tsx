"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  ExternalLink,
  Lock,
  Key,
  CheckCircle,
  ChevronRight,
} from "lucide-react";
import { getIntegrationById } from "@/lib/integrations";

export default function IntegrationConnectPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [connectionStep, setConnectionStep] = useState(1);
  const [apiKey, setApiKey] = useState("");
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState("");
  
  const integration = getIntegrationById(params.id);
  
  if (!integration) {
    return (
      <div className="container mx-auto py-8 px-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Integration not found</h1>
        <p className="mb-6">The integration you're looking for doesn't exist.</p>
        <Button onClick={() => router.push("/integrations/connect")}>
          Go back to integrations
        </Button>
      </div>
    );
  }

  const handleConnect = async () => {
    if (!apiKey) {
      setError("API key is required");
      return;
    }
    
    setIsConnecting(true);
    setError("");
    
    // Simulate API connection
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For demonstration purposes, always succeed
      setConnectionStep(3); // Move to success state
      
      // In real app, you would handle the response and potential errors
      // If successful, redirect to success page
      setTimeout(() => {
        router.push(`/integrations/success?id=${params.id}`);
      }, 1500);
      
    } catch (error) {
      setError("Failed to connect. Please check your API key and try again.");
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-3xl">
      <Button 
        variant="ghost" 
        className="mb-6"
        onClick={() => router.back()}
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to integrations
      </Button>
      
      <Card className="p-6">
        <div className="flex items-center mb-6">
          <div className="h-12 w-12 mr-4 flex items-center justify-center bg-gray-100 rounded-md">
            <Image
              src={integration.logo}
              alt={integration.name}
              width={40}
              height={40}
              className="max-h-10 max-w-10"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{integration.name}</h1>
            <p className="text-sm text-gray-500">{integration.description}</p>
          </div>
        </div>
        
        <Separator className="my-6" />
        
        {connectionStep === 1 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-medium mb-2">Connect {integration.name}</h2>
              <p className="text-sm text-gray-600 mb-4">
                Follow these steps to connect your {integration.name} account:
              </p>
              
              <ol className="space-y-4 text-sm">
                <li className="flex">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">1</span>
                  <div>
                    <p>Log in to your {integration.name} account</p>
                    <a 
                      href={`https://${integration.id}.com`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 inline-flex items-center mt-1 text-xs"
                    >
                      Go to {integration.name} <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </div>
                </li>
                <li className="flex">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">2</span>
                  <div>
                    <p>Go to Settings → API Keys</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">3</span>
                  <div>
                    <p>Create a new API key and copy it</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">4</span>
                  <div>
                    <p>Paste the API key below and click Connect</p>
                  </div>
                </li>
              </ol>
            </div>
            
            <Button 
              className="w-full"
              onClick={() => setConnectionStep(2)}
            >
              Continue to connect
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        )}
        
        {connectionStep === 2 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-medium mb-2">Enter API Key</h2>
              <p className="text-sm text-gray-600 mb-4">
                Enter your {integration.name} API key to connect your account.
              </p>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="apiKey" className="text-sm font-medium text-gray-700 flex items-center">
                    <Key className="h-4 w-4 mr-1" /> API Key
                  </label>
                  <div className="relative">
                    <Input 
                      id="apiKey"
                      type="password"
                      value={apiKey}
                      onChange={(e) => setApiKey(e.target.value)}
                      placeholder="Enter your API key"
                      className="pl-10"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                  {error && <p className="text-sm text-red-600">{error}</p>}
                </div>
                
                <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded-md">
                  <p className="font-medium mb-1 flex items-center">
                    <Lock className="h-3 w-3 mr-1" /> Your data is secure
                  </p>
                  <p>
                    Your API key is securely transmitted and stored. We use it only to sync data from 
                    {integration.name} to our platform.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col space-y-3">
              <Button 
                className="w-full"
                onClick={handleConnect}
                disabled={isConnecting}
              >
                {isConnecting ? "Connecting..." : "Connect"}
              </Button>
              
              <Button 
                variant="outline"
                className="w-full"
                onClick={() => setConnectionStep(1)}
                disabled={isConnecting}
              >
                Back
              </Button>
            </div>
          </div>
        )}
        
        {connectionStep === 3 && (
          <div className="text-center py-4">
            <div className="mx-auto h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <h2 className="text-lg font-medium mb-1">Connection Successful!</h2>
            <p className="text-sm text-gray-600 mb-4">
              Your {integration.name} account has been connected successfully.
            </p>
            <p className="text-sm text-gray-600">
              Redirecting to integration details...
            </p>
          </div>
        )}
      </Card>
    </div>
  );
}
