import React, { useEffect } from 'react';
import DevOpsHero from '@/components/DevOpsHero';
import DevOpsSkills from '@/components/DevOpsSkills';
import DevOpsExperience from '@/components/DevOpsExperience';
import DevOpsProjects from '@/components/DevOpsProjects'
import DevOpsContact from '@/components/DevOpsContact';

const DevOpsIndex = () => {
useEffect(() => {
    window.scrollTo(0, 0);
}, []);

return (
    <main> {/* Menggunakan <main> tag untuk semantik */}
    <DevOpsHero />
    <DevOpsSkills />
    <DevOpsExperience />
    <DevOpsProjects />
    <DevOpsContact />
    </main>
);
};

export default DevOpsIndex;