import { ReactNode } from "react";

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
  featured?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface LayoutProps {
  children: ReactNode;
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
  tech: string[];
}

export interface TechCategory {
  id: string;
  name: string;
  skills: string[];
}