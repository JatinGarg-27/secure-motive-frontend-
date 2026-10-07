import type { ArticleBlock } from '@/types/article'
import aiArmsRaceInAutomotiveCybersecurity from './ai-arms-race-in-automotive-cybersecurity'
import automotiveCybersecurityManagementSystemCsms from './automotive-cybersecurity-management-system-csms'
import vehicleDiagnosticSecurity from './vehicle-diagnostic-security'
import canOneCompromisedEcuTakeDownAnEntireMachine from './can-one-compromised-ecu-take-down-an-entire-machine'
import iec62443ComplianceForIndianManufacturers from './iec-62443-compliance-for-indian-manufacturers'
import legacyPlcsUnderAttack from './legacy-plcs-under-attack'
import otaUpdateSecurity from './ota-update-security'
import postQuantumCryptographyForAutomotiveCybersecurity from './post-quantum-cryptography-for-automotive-cybersecurity'
import sbomsForVehicles from './sboms-for-vehicles'
import softwareDefinedTrucksUnderAttack from './software-defined-trucks-under-attack'
import unR155ForTrucksBusesAndTractors from './un-r155-for-trucks-buses-and-tractors'
import whenImplementsBecomeAttackVectors from './when-implements-become-attack-vectors'

/**
 * Article bodies by slug. Kept apart from the article list so the Knowledge
 * Centre page does not download twelve articles to show their titles.
 */
const articleContent: Record<string, ArticleBlock[]> = {
  'ai-arms-race-in-automotive-cybersecurity': aiArmsRaceInAutomotiveCybersecurity,
  'automotive-cybersecurity-management-system-csms': automotiveCybersecurityManagementSystemCsms,
  'vehicle-diagnostic-security': vehicleDiagnosticSecurity,
  'can-one-compromised-ecu-take-down-an-entire-machine': canOneCompromisedEcuTakeDownAnEntireMachine,
  'iec-62443-compliance-for-indian-manufacturers': iec62443ComplianceForIndianManufacturers,
  'legacy-plcs-under-attack': legacyPlcsUnderAttack,
  'ota-update-security': otaUpdateSecurity,
  'post-quantum-cryptography-for-automotive-cybersecurity': postQuantumCryptographyForAutomotiveCybersecurity,
  'sboms-for-vehicles': sbomsForVehicles,
  'software-defined-trucks-under-attack': softwareDefinedTrucksUnderAttack,
  'un-r155-for-trucks-buses-and-tractors': unR155ForTrucksBusesAndTractors,
  'when-implements-become-attack-vectors': whenImplementsBecomeAttackVectors,
}

/** The body of an article, or an empty list for an unknown slug. */
export const getArticleContent = (slug: string): ArticleBlock[] => articleContent[slug] ?? []
