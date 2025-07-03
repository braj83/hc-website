"use client"; 

import React from 'react';
import Image from 'next/image';
import AnimatedGridPattern from '@/components/animated-grid-pattern';
import { Badge } from "@/components/ui/badge";
import { cn } from '@/lib/utils';
import {
  Stethoscope, TestTube, Pill, ClipboardPlus, BookOpen, PenSquare, Truck, Package, ShieldCheck,
  Flame, Network, FileJson, AppWindow, Milestone, Library, BadgeCheck, UserCheck, FlaskConical,
  FileSpreadsheet, Hospital, BarChart3, KeyRound, Users, Building, Map, Handshake, HeartHandshake,
  HeartPulse, Component, LucideIcon
} from 'lucide-react';

// --- HERO COMPONENT ---
const KnowledgebaseHero = () => {
    return (
      // UPDATED: Removed background for a seamless look
      <div className="relative pt-20 md:pt-32 pb-12 md:pb-20">
        <AnimatedGridPattern
          numSquares={40}
          maxOpacity={0.1}
          duration={3}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 h-full skew-y-12"
          )}
        />
        <div className="relative z-10 mx-auto max-w-screen-lg py-12 px-6 lg:px-0">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                <div>
                    <Badge className="bg-primary rounded-md py-1 border-none">
                        Powering Intelligent Healthcare! 🚀
                    </Badge>
                    <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl !leading-[1.2]">
                        Healthcare Knowledgebase
                    </h1>
                    <p className="mt-6 text-lg text-muted-foreground">
                        A collection of healthcare standards, code systems, APIs and other resources for building intelligent applications.
                    </p>
                </div>
                <div className="flex justify-center lg:justify-end">
                    <Image
                        src="/cute-robot-reading-book.png"
                        alt="Cute robot reading a book"
                        width={450}
                        height={450}
                        priority 
                    />
                </div>
            </div>
        </div>
      </div>
    );
  };

// --- Interfaces and data array remain the same ---
interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
}
interface FeatureCategory {
    categoryTitle: string;
    features: Feature[];
}
const knowledgebaseCategories: FeatureCategory[] = [
    { categoryTitle: 'Clinical Terminologies & Code Systems (UMLS)', features: [ { icon: Stethoscope, title: 'SNOMED CT', description: 'A comprehensive, multilingual clinical healthcare terminology for consistent data encoding.' }, { icon: TestTube, title: 'LOINC', description: 'A universal code system for identifying laboratory and clinical observations.' }, { icon: Pill, title: 'RxNorm', description: 'A normalized naming system for generic and branded drugs and for their relationships.' }, { icon: ClipboardPlus, title: 'ICD-10', description: 'The standard medical classification list for diagnoses, symptoms, and causes of injury.' }, { icon: BookOpen, title: 'MeSH', description: 'A comprehensive controlled vocabulary for indexing journal articles and books in life sciences.' }, { icon: PenSquare, title: 'CPT', description: 'Standardized codes for reporting medical, surgical, and diagnostic procedures and services.' }, { icon: Truck, title: 'HCPCS Level II', description: 'Codes for products, supplies, and services not included in the CPT medical codes.' }, { icon: Package, title: 'NDC', description: 'A unique product identifier for human drugs, specifying the labeler, product, and package size.' }, { icon: ShieldCheck, title: 'MedDRA', description: 'A clinically-validated international medical terminology used by regulatory authorities.' }, ], },
    { categoryTitle: 'Clinical Standards and Interoperability (FHIR/HL7)', features: [ { icon: Flame, title: 'FHIR R4 / R5 Resources', description: 'A modern, web-based standard for exchanging healthcare information electronically.' }, { icon: Network, title: 'HL7 v2.x Segments', description: 'A widely-implemented messaging standard for electronic data exchange in healthcare.' }, { icon: FileJson, title: 'US Core FHIR Profiles', description: 'A base set of FHIR resources promoting interoperability across the United States.' }, { icon: AppWindow, title: 'SMART on FHIR App', description: 'An open, standards-based API for secure and seamless application integration with EHRs.' }, { icon: Milestone, title: 'Clinical Quality Language (CQL)', description: 'A high-level language focused on expressing clinical quality and decision support logic.' }, { icon: Library, title: 'Value Set Authority Center (VSAC)', description: 'A central repository for the official versions of value sets supporting quality measures.' }, ], },
    { categoryTitle: 'Regulatory, Licensing, and Directory Data', features: [ { icon: BadgeCheck, title: 'NPPES (NPI Registry)', description: 'System to assign unique National Provider Identifiers (NPIs) to healthcare providers.' }, { icon: UserCheck, title: 'PECOS', description: 'The online Medicare provider enrollment system to review and manage information.' }, { icon: FlaskConical, title: 'CLIA Laboratory Database', description: 'Data on clinical labs certified to perform testing on human specimens under CLIA.' }, { icon: FileSpreadsheet, title: 'CMS Medicare Advantage Plan Benefit Data', description: 'Detailed information on benefits, premiums, and cost-sharing for MA plans.' }, { icon: Hospital, title: 'CMS Hospital Compare & Public Reporting Data', description: 'Publicly reported data on hospital quality of care and patient satisfaction metrics.' }, { icon: BarChart3, title: 'AHRQ Quality Indicators', description: 'Standardized, evidence-based measures of healthcare quality from inpatient data.' }, { icon: KeyRound, title: 'DEA Controlled Substance Prescriber Database', description: 'A database of prescribers who are authorized by the DEA to handle controlled substances.' }, ], },
    { categoryTitle: 'Social Determinants & Location-Based Data', features: [ { icon: Users, title: 'CMS Social Vulnerability Index (SVI)', description: 'Measures the resilience of communities when confronted by external stresses on health.' }, { icon: Building, title: 'Area Deprivation Index (ADI)', description: 'A measure of neighborhood socioeconomic disadvantage based on 17 indicators.' }, { icon: Map, title: 'HRSA HPSA & MUA Maps', description: 'Maps identifying Health Professional Shortage Areas & Medically Underserved Areas.' }, { icon: Handshake, title: 'SAMHSA Treatment Locator', description: 'A directory for locating substance abuse and mental health treatment facilities.' }, ], },
    { categoryTitle: 'Optional / Emerging Data', features: [ { icon: HeartHandshake, title: 'Commercial Claims Data (Private)', description: 'Anonymized data from private health insurance claims for research and analytics.' }, { icon: HeartPulse, title: 'Patient-Generated Health Data (PGHD)', description: 'Health-related data created, recorded, or gathered by patients to help address a health concern.' }, { icon: Component, title: 'HealthCheck Knowledge Graph', description: 'A proprietary, interconnected dataset linking various healthcare entities and concepts.' }, ], },
];

// --- MAIN PAGE COMPONENT ---
const KnowledgebasePage = () => {
  return (
    <div className="bg-background">
      <KnowledgebaseHero />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Explore Data Categories</h2>
            <p className="mt-2 text-lg text-muted-foreground">A comprehensive overview of the standards and systems available.</p>
        </div>
        
        <div className="space-y-16">
            {knowledgebaseCategories.map((category) => (
                <div key={category.categoryTitle}>
                    <h3 className="text-2xl font-semibold text-foreground border-b pb-4 mb-8">
                        {category.categoryTitle}
                    </h3>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {category.features.map((feature) => (
                        // UPDATED: Clean, transparent card with a border highlight on hover
                        <div
                            key={feature.title}
                            className="flex flex-col rounded-xl p-6 border bg-transparent transition-colors hover:border-primary/50"
                        >
                            <div className="mb-4 h-10 w-10 flex items-center justify-center bg-primary text-primary-foreground rounded-lg">
                            <feature.icon className="h-6 w-6" aria-hidden="true" />
                            </div>
                            <span className="text-lg font-semibold text-foreground">{feature.title}</span>
                            <p className="mt-1 text-muted-foreground text-[15px]">
                            {feature.description}
                            </p>
                        </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default KnowledgebasePage;
