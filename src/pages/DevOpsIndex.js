import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import DevOpsHero from '@/components/DevOpsHero';
import DevOpsSkills from '@/components/DevOpsSkills';
import DevOpsExperience from '@/components/DevOpsExperience';
import DevOpsProjects from '@/components/DevOpsProjects';
import DevOpsContact from '@/components/DevOpsContact';
const DevOpsIndex = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (_jsxs("main", { children: [" ", _jsx(DevOpsHero, {}), _jsx(DevOpsSkills, {}), _jsx(DevOpsExperience, {}), _jsx(DevOpsProjects, {}), _jsx(DevOpsContact, {})] }));
};
export default DevOpsIndex;
