import { createContext, useContext } from 'react';
import { Resume } from '../@types/resume';

export const ResumeContext = createContext<Resume | null>(null);
export const useResume = () => useContext(ResumeContext);
