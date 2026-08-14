'use client';

export default function ProcessStepsSection() {
  const steps = [
    { number: '01', title: 'Meeting', description: 'Initial consultation with client' },
    { number: '02', title: 'Concept', description: 'Creative concept development' },
    { number: '03', title: 'Planning', description: 'Detailed planning and strategy' },
    { number: '04', title: '3D Visualization', description: 'Professional 3D renderings' },
    { number: '05', title: 'Material Selection', description: 'Premium material choices' },
    { number: '06', title: 'Execution', description: 'Expert project execution' },
    { number: '07', title: 'Final Delivery', description: 'Project completion' },
  ];

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-light tracking-wide text-gray-800 mb-20 text-center">
          Our Process Steps
        </h2>

        {/* Steps Timeline */}
        <div className="overflow-x-auto">
          <div className="flex gap-8 min-w-max pb-4">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center flex-shrink-0">
                {/* Step Number */}
                <div className="mb-6">
                  <span className="text-4xl font-light text-gray-800 tracking-wider">
                    {step.number}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-light text-gray-800 text-center mb-2 w-32">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-sm text-gray-500 font-light text-center w-40">
                  {step.description}
                </p>

                {/* Connector Line */}
                {idx < steps.length - 1 && (
                  <div className="absolute ml-32 mt-32 w-8 h-1 bg-gray-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Alternative: Grid Layout */}
        <div className="hidden md:grid grid-cols-7 gap-4 mt-16">
          {steps.map((step, idx) => (
            <div key={idx} className="text-center">
              <div className="mb-4">
                <span className="text-3xl font-light text-gray-800">
                  {step.number}
                </span>
              </div>
              <h3 className="text-lg font-light text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-500 font-light">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
