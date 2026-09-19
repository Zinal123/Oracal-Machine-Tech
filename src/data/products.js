import cncPlateImg from '../assets/images/cnc-plate-laser-cutting-machine.png'
import cncTubeImg from '../assets/images/cnc-tube-laser-cutting-machine.png'
import plasmaImg from '../assets/images/oracle-machine-outdoor.png'
import bendingImg from '../assets/images/cnc-bending-machine.png'
import weldingImg from '../assets/images/robotic-welding-system.png'

// Generic FAQ answers reused verbatim from the original product-details.html —
// these were written to apply to any Oracle machine, not just product #1.
const GENERIC_TRAINING_FAQ = {
  question: 'What training is provided?',
  answer:
    'We provide comprehensive on-site training for operators and maintenance staff. Training covers machine operation, maintenance, safety, and software usage.',
}
const GENERIC_WARRANTY_FAQ = {
  question: 'What is the warranty period?',
  answer:
    'Standard warranty is 2 years comprehensive coverage. Extended warranty options available up to 5 years. Support includes 24/7 technical assistance.',
}

export const products = [
  {
    id: 1,
    name: 'Sheet Fiber Laser Cutting Machine',
    category: 'Fiber Laser',
    application: 'Sheet Metal',
    badge: 'Popular',
    icon: 'fas fa-square',
    image: cncPlateImg,
    shortDescription:
      'High-speed precision cutting for sheet metal with laser accuracy up to ±0.05mm. Ideal for automotive and electronics industries.',
    cardSpecs: { 'Max Power': '2500W', 'Max Speed': '35 m/min', Accuracy: '±0.05mm' },
    overview: [
      { label: 'Laser Power', value: '2500W' },
      { label: 'Cutting Speed', value: '35 m/min' },
      { label: 'Accuracy', value: '±0.05mm' },
      { label: 'Working Area', value: '1500×3000mm' },
    ],
    about: [
      'The Sheet Fiber Laser Cutting Machine is a high-speed precision cutting system designed for intricate sheet metal fabrication. Perfect for automotive components, industrial applications, and custom designs requiring micron-level accuracy.',
      'With cutting-edge fiber laser technology and advanced CNC controls, this machine delivers consistent, high-quality cuts while minimizing material waste. Ideal for production runs and precision work.',
    ],
    checklist: [
      'Precision cutting up to ±0.05mm accuracy',
      'Multiple material compatibility',
      'Fast production speed (35 m/min)',
      'Low maintenance and operational costs',
    ],
    specTable: [
      ['Laser Source', 'Fiber Laser'],
      ['Max Power', '2500W'],
      ['Max Speed', '35 m/min'],
      ['Positioning Accuracy', '±0.05mm'],
      ['Repeat Accuracy', '±0.03mm'],
      ['Working Area', '1500mm × 3000mm (Customizable)'],
      ['Material Thickness', '0.5mm - 20mm'],
      ['Power Consumption', '15-20 kW'],
      ['Control System', 'Advanced CNC with Touchscreen'],
      ['Cooling System', 'Water-cooled Chiller'],
      ['Machine Weight', '5000 kg'],
      ['Dimensions', '4500 × 2500 × 1800 mm'],
    ],
    features: [
      { icon: 'fas fa-bullseye', title: 'Premium Accuracy', text: 'Micron-level precision cutting (±0.05mm) for complex designs' },
      { icon: 'fas fa-tachometer-alt', title: 'High Speed', text: '35 m/min cutting speed increases productivity and ROI' },
      { icon: 'fas fa-cubes', title: 'Multiple Materials', text: 'Works with steel, stainless, aluminum, copper, and brass' },
      { icon: 'fas fa-leaf', title: 'Energy Efficient', text: 'Low operational costs with minimal power consumption' },
      { icon: 'fas fa-tools', title: 'Low Maintenance', text: 'Minimal consumables and easy maintenance procedures' },
      { icon: 'fas fa-heart', title: 'Long Service Life', text: 'Built for continuous industrial use (10+ years)' },
    ],
    applications: [
      { icon: 'fas fa-car', title: 'Automotive', text: 'Metal components and chassis fabrication' },
      { icon: 'fas fa-rocket', title: 'Aerospace', text: 'Precision aircraft and component parts' },
      { icon: 'fas fa-microchip', title: 'Electronics', text: 'Enclosures and device housings' },
      { icon: 'fas fa-hammer', title: 'Metal Fabrication', text: 'Custom metalwork and industrial components' },
      { icon: 'fas fa-gem', title: 'Jewelry', text: 'Decorative and precision metalwork' },
      { icon: 'fas fa-flask', title: 'Medical Devices', text: 'Surgical instruments and device components' },
    ],
    process: [
      { step: 'Step 1: Material Loading', text: 'Carefully load the sheet metal material onto the machine bed with proper alignment and fixation.' },
      { step: 'Step 2: Machine Setup', text: 'Configure machine parameters including power levels, cutting speed, and assist gas pressure.' },
      { step: 'Step 3: CNC Programming', text: 'Input or import the design file (DXF/DWG) and optimize the cutting path for efficiency.' },
      { step: 'Step 4: Precision Cutting', text: 'The laser beam precisely cuts the material at high speed with minimal heat distortion.' },
      { step: 'Step 5: Quality Inspection', text: 'Inspect finished parts for accuracy, edge quality, and dimensional conformance.' },
      { step: 'Step 6: Finished Product', text: 'Remove finished parts and prepare for next production run or secondary processing.' },
    ],
    faq: [
      {
        question: 'What materials can this machine cut?',
        answer:
          'The Sheet Fiber Laser Cutting Machine can cut stainless steel, mild steel, aluminum, copper, brass, and other metals. It handles materials from 0.5mm to 20mm thickness efficiently.',
      },
      {
        question: 'What is the cutting accuracy?',
        answer:
          'The machine offers positioning accuracy of ±0.05mm and repeat accuracy of ±0.03mm, making it suitable for precision applications and complex designs.',
      },
      {
        question: 'How fast can it cut?',
        answer:
          'Maximum cutting speed is 35 m/min for thin materials. Actual speed varies based on material type, thickness, and design complexity.',
      },
      GENERIC_TRAINING_FAQ,
      GENERIC_WARRANTY_FAQ,
    ],
  },

  {
    id: 2,
    name: 'Tube Fiber Laser Cutting Machine',
    category: 'Fiber Laser',
    application: 'Tube',
    badge: 'Featured',
    icon: 'fas fa-circle-notch',
    image: cncTubeImg,
    shortDescription:
      'Specialized system for cutting round and square tubes with precision. Ideal for exhaust systems and frameworks.',
    cardSpecs: { 'Max Power': '2500W', 'Tube Diameter': 'Up to 200mm', Accuracy: '±0.1mm' },
    overview: [
      { label: 'Laser Power', value: '2500W' },
      { label: 'Cutting Speed', value: '30 m/min' },
      { label: 'Accuracy', value: '±0.1mm' },
      { label: 'Tube Diameter', value: '10-200mm' },
    ],
    about: [
      'Specialized fiber laser cutting system for round and square tubes, profiles, and pipes. Ideal for exhaust systems, structural frameworks, and tubular component manufacturing.',
      'With an auto-centering chuck system and advanced CNC control, this machine delivers clean, high-speed cuts on round and square tubes while minimizing material waste and post-processing.',
    ],
    checklist: [
      'Specialized for tube cutting',
      'Auto-centering chuck system',
      'Minimal material waste',
      'High-speed operation',
    ],
    specTable: [
      ['Laser Source', 'Fiber Laser'],
      ['Max Power', '2500W'],
      ['Max Speed', '30 m/min'],
      ['Positioning Accuracy', '±0.1mm'],
      ['Repeat Accuracy', '±0.05mm'],
      ['Round Tube Diameter', '10mm - 200mm'],
      ['Square Tube Size', '10mm - 200mm'],
      ['Material Thickness', '0.5mm - 15mm'],
      ['Power Consumption', '15-20 kW'],
      ['Control System', 'CNC with auto-centering'],
      ['Machine Weight', '6500 kg'],
      ['Dimensions', '3000 × 1500 × 1600 mm'],
    ],
    features: [
      { icon: 'fas fa-bullseye', title: 'Specialized Design', text: 'Optimized for round and square tubes' },
      { icon: 'fas fa-leaf', title: 'Minimal Waste', text: 'Precise cuts reduce scrap material' },
      { icon: 'fas fa-tachometer-alt', title: 'Fast Processing', text: 'Quick turnover for batch production' },
      { icon: 'fas fa-gem', title: 'Edge Quality', text: 'Clean cuts without post-processing' },
      { icon: 'fas fa-cubes', title: 'Flexible', text: 'Handles various tube sizes and profiles' },
      { icon: 'fas fa-robot', title: 'Automation Ready', text: 'Easy integration with robotic systems' },
    ],
    applications: [
      { icon: 'fas fa-car', title: 'Automotive', text: 'Exhaust system manufacturing' },
      { icon: 'fas fa-building', title: 'Construction', text: 'Structural steel components' },
      { icon: 'fas fa-dumbbell', title: 'Heavy Equipment', text: 'Frameworks and machinery parts' },
      { icon: 'fas fa-industry', title: 'Pipe Manufacturing', text: 'Pipe fittings and connections' },
      { icon: 'fas fa-tint', title: 'Hydraulics', text: 'Hydraulic cylinder tubes' },
      { icon: 'fas fa-dolly', title: 'Material Handling', text: 'Railings and handrails' },
    ],
    process: [
      { step: 'Step 1: Material Loading', text: 'Load tube or pipe stock into the machine and secure it with the auto-centering chuck system.' },
      { step: 'Step 2: Machine Setup', text: 'Configure machine parameters including power levels, cutting speed, and assist gas pressure.' },
      { step: 'Step 3: CNC Programming', text: 'Input or import the design file (DXF/DWG) and optimize the cutting path for efficiency.' },
      { step: 'Step 4: Precision Cutting', text: 'The laser beam precisely cuts the tube profile at high speed with minimal heat distortion.' },
      { step: 'Step 5: Quality Inspection', text: 'Inspect finished parts for accuracy, edge quality, and dimensional conformance.' },
      { step: 'Step 6: Finished Product', text: 'Remove finished parts and prepare for next production run or secondary processing.' },
    ],
    faq: [
      {
        question: 'What materials can this machine cut?',
        answer:
          'The Tube Fiber Laser Cutting Machine cuts steel, stainless steel, and aluminum tubes from 10mm to 200mm in diameter, handling wall thickness from 0.5mm to 15mm.',
      },
      {
        question: 'What is the cutting accuracy?',
        answer:
          'The machine offers positioning accuracy of ±0.1mm and repeat accuracy of ±0.05mm, ideal for structural and precision tube applications.',
      },
      {
        question: 'How fast can it cut?',
        answer:
          'Maximum cutting speed is 30 m/min for thin-wall tubing. Actual speed varies based on tube diameter, wall thickness, and profile complexity.',
      },
      GENERIC_TRAINING_FAQ,
      GENERIC_WARRANTY_FAQ,
    ],
  },

  {
    id: 3,
    name: 'CNC Plasma Cutting Machine',
    category: 'Plasma',
    application: 'Heavy Duty',
    badge: 'New',
    icon: 'fas fa-bolt',
    image: plasmaImg,
    shortDescription:
      'Powerful plasma cutting technology for thick metal sheets. Cost-effective solution with cutting speeds up to 10000 mm/min.',
    cardSpecs: { 'Max Thickness': '50mm', 'Cutting Speed': '10000 mm/min', Power: '400A Plasma' },
    overview: [
      { label: 'Plasma Power', value: '400A' },
      { label: 'Cutting Speed', value: '10000 mm/min' },
      { label: 'Accuracy', value: '±1.5mm' },
      { label: 'Working Area', value: '2000×4000mm' },
    ],
    about: [
      'Industrial plasma cutting system for heavy-duty metal sheet cutting. Cost-effective solution for thick material processing with high cutting speeds and excellent edge quality.',
      'With a high-definition plasma torch and advanced CNC controller, this machine cuts steel, stainless steel, aluminum, and copper up to 50mm thick, making it the go-to solution for structural and heavy fabrication work.',
    ],
    checklist: [
      'High cutting speed (10000 mm/min)',
      'Thick material capability (up to 50mm)',
      'Cost-effective operation',
      'Minimal consumables',
    ],
    specTable: [
      ['Cutting Process', 'Plasma Arc'],
      ['Max Cutting Thickness', '50mm (mild steel)'],
      ['Max Speed', '10000 mm/min'],
      ['Positioning Accuracy', '±1.5mm'],
      ['Working Area', '2000mm × 4000mm (Customizable)'],
      ['Plasma Power', '400A Industrial grade'],
      ['Power Consumption', '30-40 kW'],
      ['Control System', 'Advanced CNC controller'],
      ['Torch Type', 'High-definition plasma torch'],
      ['Cooling System', 'Air-cooled system'],
      ['Machine Weight', '8000 kg'],
      ['Dimensions', '5500 × 2500 × 1500 mm'],
    ],
    features: [
      { icon: 'fas fa-tachometer-alt', title: 'High Speed', text: '10000 mm/min cutting speed' },
      { icon: 'fas fa-layer-group', title: 'Thick Material', text: 'Handles 50mm steel easily' },
      { icon: 'fas fa-coins', title: 'Cost Effective', text: 'Lower operational costs vs laser' },
      { icon: 'fas fa-dumbbell', title: 'Heavy Duty', text: 'Designed for continuous industrial use' },
      { icon: 'fas fa-tools', title: 'Simple Maintenance', text: 'Easy consumables replacement' },
      { icon: 'fas fa-expand', title: 'Large Format', text: 'Handles big sheets efficiently' },
    ],
    applications: [
      { icon: 'fas fa-ship', title: 'Shipbuilding', text: 'Hull and structural components' },
      { icon: 'fas fa-truck', title: 'Heavy Equipment', text: 'Machinery and equipment parts' },
      { icon: 'fas fa-building', title: 'Construction Steel', text: 'Structural steel cutting' },
      { icon: 'fas fa-industry', title: 'Pressure Vessels', text: 'Tank and vessel manufacturing' },
      { icon: 'fas fa-hammer', title: 'Structural Fabrication', text: 'Framework and support components' },
      { icon: 'fas fa-road', title: 'Bridge Building', text: 'Bridge components' },
    ],
    process: [
      { step: 'Step 1: Material Loading', text: 'Carefully load the metal sheet onto the cutting table with proper alignment and fixation.' },
      { step: 'Step 2: Machine Setup', text: 'Configure machine parameters including plasma power, cutting speed, and air supply pressure.' },
      { step: 'Step 3: CNC Programming', text: 'Input or import the design file (DXF/DWG) and optimize the cutting path for efficiency.' },
      { step: 'Step 4: Precision Cutting', text: 'The plasma torch cuts through thick material at high speed with a clean, consistent edge.' },
      { step: 'Step 5: Quality Inspection', text: 'Inspect finished parts for accuracy, edge quality, and dimensional conformance.' },
      { step: 'Step 6: Finished Product', text: 'Remove finished parts and prepare for next production run or secondary processing.' },
    ],
    faq: [
      {
        question: 'What materials can this machine cut?',
        answer:
          'The CNC Plasma Cutting Machine cuts steel, stainless steel, aluminum, and copper up to 50mm thick (mild steel), making it ideal for heavy-duty fabrication.',
      },
      {
        question: 'What is the cutting accuracy?',
        answer:
          'The machine offers positioning accuracy of ±1.5mm, well suited for heavy-duty structural and industrial cutting rather than micron-level precision work.',
      },
      {
        question: 'How fast can it cut?',
        answer:
          'Maximum cutting speed is 10000 mm/min. Actual speed depends on material thickness and the complexity of the cut path.',
      },
      GENERIC_TRAINING_FAQ,
      GENERIC_WARRANTY_FAQ,
    ],
  },

  {
    id: 4,
    name: '5 Axis CNC Bending Machine',
    category: 'CNC',
    application: 'Sheet Metal',
    badge: 'Advanced',
    icon: 'fas fa-indent',
    image: bendingImg,
    shortDescription:
      'Advanced 5-axis bending system for complex 3D sheet metal fabrication. Precision bending with load capacity up to 500 tons.',
    cardSpecs: { 'Max Load': '500 Ton', 'Bending Length': 'Up to 3000mm', Accuracy: '±1mm' },
    overview: [
      { label: 'Bending Load', value: '500 Ton' },
      { label: 'Bending Length', value: '3000mm' },
      { label: 'Accuracy', value: '±1mm' },
      { label: 'Axes', value: '5-Axis' },
    ],
    about: [
      'Advanced 5-axis CNC bending system for complex 3D sheet metal fabrication. Enables precise bending with load capacity up to 500 tons and exceptional repeatability.',
      'With automated bend sequencing, quick die changeover, and a touchscreen 5-axis controller, this machine turns flat sheet metal into complex 3D geometries with consistent ±0.5mm repeatability.',
    ],
    checklist: [
      '5-axis precision control',
      'Complex 3D bending capability',
      'High load capacity (500 tons)',
      'Excellent repeatability (±0.5mm)',
    ],
    specTable: [
      ['Bending Type', 'Hydraulic Press Brake'],
      ['Max Bending Load', '500 Tons'],
      ['Bending Length', '3000mm (Customizable)'],
      ['Positioning Accuracy', '±1mm'],
      ['Repeat Accuracy', '±0.5mm'],
      ['Max Material Thickness', '12mm (Mild steel)'],
      ['Axes', '5-axis (X, Y, Z, R, B)'],
      ['Bending Angle Range', '0° - 135° (Adjustable)'],
      ['Speed', '50-80 strokes/min'],
      ['Power Consumption', '20-25 kW'],
      ['Machine Weight', '12000 kg'],
      ['Dimensions', '4500 × 1800 × 1900 mm'],
    ],
    features: [
      { icon: 'fas fa-cube', title: 'Complex Geometry', text: '5-axis enables 3D bending' },
      { icon: 'fas fa-bullseye', title: 'High Precision', text: '±0.5mm repeatability' },
      { icon: 'fas fa-weight-hanging', title: 'Large Load', text: '500-ton capacity handles thick materials' },
      { icon: 'fas fa-robot', title: 'Automation', text: 'Reduces manual handling' },
      { icon: 'fas fa-cubes', title: 'Flexibility', text: 'Works with multiple die sets' },
      { icon: 'fas fa-tachometer-alt', title: 'Efficiency', text: 'Fast cycle times (50-80 strokes/min)' },
    ],
    applications: [
      { icon: 'fas fa-car', title: 'Automotive', text: 'Body panels and structural parts' },
      { icon: 'fas fa-rocket', title: 'Aerospace', text: 'Fuselage and component panels' },
      { icon: 'fas fa-fan', title: 'HVAC Manufacturing', text: 'Ductwork fabrication' },
      { icon: 'fas fa-bolt', title: 'Electrical Equipment', text: 'Cabinet and enclosure fabrication' },
      { icon: 'fas fa-hammer', title: 'Metal Fabrication', text: 'Custom industrial housings' },
      { icon: 'fas fa-building', title: 'Construction Metal', text: '3D architectural panels' },
    ],
    process: [
      { step: 'Step 1: Material Loading', text: 'Load flat sheet metal blanks onto the bending machine bed with precise alignment.' },
      { step: 'Step 2: Machine Setup', text: 'Configure bending parameters including tonnage, die selection, and bend sequence.' },
      { step: 'Step 3: CNC Programming', text: 'Input or import the design file and optimize the 5-axis bend sequence for accuracy.' },
      { step: 'Step 4: Precision Bending', text: 'The press brake forms the material into complex 3D geometries with minimal spring-back.' },
      { step: 'Step 5: Quality Inspection', text: 'Inspect finished parts for bend angle accuracy, dimensional conformance, and surface quality.' },
      { step: 'Step 6: Finished Product', text: 'Remove finished parts and prepare for next production run or secondary processing.' },
    ],
    faq: [
      {
        question: 'What materials can this machine bend?',
        answer:
          'The 5 Axis CNC Bending Machine bends mild steel, stainless steel, and aluminum up to 12mm thick using standard or custom V-dies.',
      },
      {
        question: 'What is the bending accuracy?',
        answer:
          'The machine offers positioning accuracy of ±1mm and repeat accuracy of ±0.5mm across complex, multi-axis bend sequences.',
      },
      {
        question: 'How fast can it bend?',
        answer:
          'The machine cycles at 50-80 strokes per minute; actual throughput depends on part geometry and the number of bends per piece.',
      },
      GENERIC_TRAINING_FAQ,
      GENERIC_WARRANTY_FAQ,
    ],
  },

  {
    id: 5,
    name: '5 Axis Robotic Welding System',
    category: 'Welding',
    application: 'Precision',
    badge: 'Automation',
    icon: 'fas fa-robot',
    image: weldingImg,
    shortDescription:
      'Fully automated robotic welding with 5-axis articulation. Ideal for mass production with consistent quality and speed.',
    cardSpecs: { Axes: '5-Axis', 'Welding Speed': 'Up to 2000 mm/min', Repeatability: '±0.5mm' },
    overview: [
      { label: 'Welding Speed', value: '2000 mm/min' },
      { label: 'Accuracy', value: '±0.5mm' },
      { label: 'Robot Reach', value: '2000mm' },
      { label: 'Weld Power', value: '300-500A' },
    ],
    about: [
      'Fully automated robotic welding system with 5-axis articulation. Delivers consistent, high-quality welds for mass production with minimal human intervention.',
      'With vision-guided joint tracking and real-time quality monitoring, this system welds steel, stainless steel, and aluminum using MIG/MAG or TIG processes, cycling parts in as little as 10 seconds.',
    ],
    checklist: [
      'Full 5-axis automation',
      'High welding speed (2000 mm/min)',
      'Excellent repeatability (±0.3mm)',
      'Vision-guided joining',
    ],
    specTable: [
      ['Robot Axes', '5-Axis articulation'],
      ['Welding Process', 'MIG/MAG (GMAW) or TIG'],
      ['Max Welding Speed', '2000 mm/min'],
      ['Positioning Accuracy', '±0.5mm'],
      ['Repeat Accuracy', '±0.3mm'],
      ['Material Thickness', '1mm - 15mm'],
      ['Welding Power', '300A - 500A (Selectable)'],
      ['Control System', 'Computer-controlled with Vision'],
      ['Cycle Time', '10-60 seconds (Variable)'],
      ['Robot Reach', '2000mm'],
      ['Machine Weight', '1500 kg (robot + controller)'],
      ['Materials', 'Steel, stainless steel, aluminum'],
    ],
    features: [
      { icon: 'fas fa-check-circle', title: 'Consistency', text: 'Identical welds every cycle' },
      { icon: 'fas fa-tachometer-alt', title: 'Speed', text: '2000 mm/min joining capability' },
      { icon: 'fas fa-cubes', title: 'Flexibility', text: 'Multiple process support' },
      { icon: 'fas fa-bullseye', title: 'Precision', text: '±0.3mm repeatability' },
      { icon: 'fas fa-shield-alt', title: 'Safety', text: 'Automated process = safer environment' },
      { icon: 'fas fa-chart-line', title: 'ROI', text: 'Fast payback period for high-volume production' },
    ],
    applications: [
      { icon: 'fas fa-car', title: 'Automotive Manufacturing', text: 'Body and chassis assembly' },
      { icon: 'fas fa-truck', title: 'Heavy Equipment', text: 'Frame and structural welding' },
      { icon: 'fas fa-industry', title: 'Pipeline Systems', text: 'Pipe and tube fabrication' },
      { icon: 'fas fa-building', title: 'Structural Steel', text: 'Structural steel assembly' },
      { icon: 'fas fa-flask', title: 'Pressure Vessels', text: 'Pressure vessel fabrication' },
      { icon: 'fas fa-hammer', title: 'Industrial Fabrication', text: 'Metal furniture and equipment assembly' },
    ],
    process: [
      { step: 'Step 1: Material Loading', text: 'Fixture the components to be joined into the welding cell with precise alignment.' },
      { step: 'Step 2: Machine Setup', text: 'Configure welding parameters including process type, power, and wire/gas settings.' },
      { step: 'Step 3: CNC Programming', text: 'Program or teach the weld path, using vision-guided tracking to locate the joint.' },
      { step: 'Step 4: Precision Welding', text: 'The 5-axis robot executes the weld path at high speed with consistent penetration.' },
      { step: 'Step 5: Quality Inspection', text: 'Inspect finished welds for penetration, consistency, and dimensional conformance.' },
      { step: 'Step 6: Finished Product', text: 'Remove finished assemblies and prepare for next production run or secondary processing.' },
    ],
    faq: [
      {
        question: 'What materials can this machine weld?',
        answer:
          'The 5 Axis Robotic Welding System welds steel, stainless steel, and aluminum from 1mm to 15mm thick using MIG/MAG or TIG processes.',
      },
      {
        question: 'What is the welding accuracy?',
        answer:
          'The system offers positioning accuracy of ±0.5mm and repeat accuracy of ±0.3mm, backed by optional vision-guided joint tracking.',
      },
      {
        question: 'How fast can it weld?',
        answer:
          'Maximum welding speed is 2000 mm/min, with cycle times of 10-60 seconds per part depending on joint geometry.',
      },
      GENERIC_TRAINING_FAQ,
      GENERIC_WARRANTY_FAQ,
    ],
  },
]

export function getProductById(id) {
  return products.find((p) => p.id === Number(id))
}

export function getRelatedProducts(id, count = 3) {
  return products.filter((p) => p.id !== Number(id)).slice(0, count)
}

export const CATEGORY_FILTERS = [
  { value: 'Fiber Laser', label: 'Fiber Laser Cutting' },
  { value: 'CNC', label: 'CNC Cutting & Bending' },
  { value: 'Plasma', label: 'Plasma Cutting' },
  { value: 'Welding', label: 'Robotic Welding' },
]

export const APPLICATION_FILTERS = [
  { value: 'Sheet Metal', label: 'Sheet Metal' },
  { value: 'Tube', label: 'Tube & Profile' },
  { value: 'Heavy Duty', label: 'Heavy Duty' },
  { value: 'Precision', label: 'Precision Work' },
]
