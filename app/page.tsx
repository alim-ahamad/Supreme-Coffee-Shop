'use client'

import { Navigation } from '@/components/layout/Navigation'
import { HeroSection } from '@/components/sections/HeroSection'
import { CraftSection } from '@/components/sections/CraftSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { CommunitySection } from '@/components/sections/CommunitySection'
import { MenuSection } from '@/components/sections/MenuSection'
import { CoffeeJourneySection } from '@/components/sections/CoffeeJourneySection'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { SectionDivider } from '@/components/ui/SectionDivider'

export default function Page() {
  return (
    <main className="w-full overflow-hidden">
      <Navigation />
      <HeroSection />
      <SectionDivider />
      <CraftSection />
      <SectionDivider />
      <ExperienceSection />
      <SectionDivider />
      <CommunitySection />
      <SectionDivider />
      <MenuSection />
      <SectionDivider />
      <CoffeeJourneySection />
      <SectionDivider />
      <FeaturesSection />
      <SectionDivider />
      <ContactSection />
    </main>
  )
}
