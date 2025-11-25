import React from 'react';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}