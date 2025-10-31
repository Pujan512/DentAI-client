"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);
  const router = useRouter();

  const url = process.env.NEXT_PUBLIC_API_URL;

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('image/')) {
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);
        fileInputRef.current.files = dataTransfer.files;
        
        handleImageFile(file);
      } else {
        alert('Please upload an image file');
      }
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleImageFile(e.target.files[0]);
    }
  };

  const handleImageFile = (imageFile) => {
    setImage(imageFile);
    setResult(null);

    const reader = new FileReader();
    reader.onload = (e) => {
      setPreviewUrl(e.target.result);
    };
    reader.readAsDataURL(imageFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!image) {
      alert('Please select an image first');
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("file", image);

    try {
      const res = await fetch(url + "predict", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error('Upload failed');
      }

      const data = await res.json();
      setResult(data);
    } catch (error) {
      console.log("Upload failed:", error);
      alert("Upload failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const navigateToResults = () => {
    if (result) {
      localStorage.setItem('analysisResult', JSON.stringify({
        result: result,
        timestamp: new Date().toISOString()
      }));
      router.push('/results');
    }
  };

  const removeImage = () => {
    setImage(null);
    setPreviewUrl("");
    setResult(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleDragAreaClick = (e) => {
    if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'INPUT') {
      fileInputRef.current?.click();
    }
  };

  const features = [
    {
      icon: "🤖",
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms detect dental issues with high accuracy"
    },
    {
      icon: "⚡",
      title: "Instant Results",
      description: "Get comprehensive analysis within seconds, not days"
    },
    {
      icon: "📊",
      title: "Detailed Reports",
      description: "Receive detailed insights with symptoms and recommendations"
    },
    {
      icon: "🛡️",
      title: "Privacy First",
      description: "Your data is secure and processed with complete confidentiality"
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Upload Image",
      description: "Take or upload a clear photo of your oral cavity",
      icon: "📸"
    },
    {
      number: "2",
      title: "AI Analysis",
      description: "Our advanced AI processes the image to detect potential issues",
      icon: "🔍"
    },
    {
      number: "3",
      title: "Get Results",
      description: "Receive detailed report with observations and recommendations",
      icon: "📋"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Take Control of Your <span className="text-indigo-600">Oral Health</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Get instant AI-powered analysis of your dental health. Upload a photo and receive 
            comprehensive insights in seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => document.getElementById('upload-section').scrollIntoView({ behavior: 'smooth' })}
              className="cursor-pointer px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold text-lg"
            >
              Start Free Analysis
            </button>
            <button 
              onClick={() => document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' })}
              className="cursor-pointer px-8 py-4 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors font-semibold text-lg"
            >
              How It Works
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid - Updated with descriptions only on larger screens */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-indigo-600">DentAI</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced technology meets dental care expertise
            </p>
          </div>
          
          {/* Mobile 2x2 Grid - No descriptions */}
          <div className="md:hidden">
            <div className="grid grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-4">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Layout - With descriptions */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Timeline Section */}
      <section id="how-it-works" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works in <span className="text-indigo-600">3 Simple Steps</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get your oral health analysis in minutes
            </p>
          </div>
          
          {/* Mobile Horizontal Timeline */}
          <div className="md:hidden">
            <div className="flex justify-between items-start relative px-2">
              {/* Timeline connector line */}
              <div className="absolute top-6 left-4 right-4 h-0.5 bg-indigo-200 -z-0"></div>
              
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center flex-1 px-2 relative">
                  {/* Step number circle */}
                  <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-lg font-bold mb-3 relative z-10 border-4 border-white">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="text-2xl mb-2">{step.icon}</div>
                  
                  {/* Title */}
                  <h3 className="text-sm font-semibold text-gray-900 leading-tight">{step.title}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-2xl font-bold mb-6 relative z-10">
                    {step.number}
                  </div>
                  <div className="text-3xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-indigo-200 -z-0"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section id="upload-section" className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Start Your <span className="text-indigo-600">Analysis</span>
            </h2>
            <p className="text-xl text-gray-600">
              Upload a clear photo of your teeth for instant AI analysis
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-8">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col items-center">
                {/* Drag & Drop Area */}
                <div
                  className={`relative w-full max-w-2xl border-2 border-dashed rounded-2xl transition-all duration-300 ${
                    dragActive 
                      ? "border-indigo-500 bg-indigo-50" 
                      : "border-gray-300 hover:border-indigo-400"
                  } p-8 sm:p-12 mb-6 cursor-pointer`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  onClick={handleDragAreaClick}
                >
                  <input
                    ref={fileInputRef}
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  
                  <div className="text-center">
                    <div className="mx-auto w-16 h-16 mb-4 text-gray-400">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-lg font-semibold text-gray-700 mb-2">
                      {dragActive ? "Drop your image here" : "Upload Oral Image"}
                    </p>
                    <p className="text-gray-500 text-sm">
                      Drag & drop your image here or click to browse
                    </p>
                    <p className="text-gray-400 text-xs mt-2">
                      Supports JPG, PNG, JPEG • Max 10MB
                    </p>
                  </div>
                </div>

                {/* Preview and Actions */}
                {previewUrl && (
                  <div className="w-full max-w-2xl">
                    <div className="flex flex-col sm:flex-row gap-6 items-center justify-between mb-6 p-6 bg-gray-50 rounded-xl">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img 
                            src={previewUrl} 
                            alt="Preview" 
                            className="w-24 h-24 object-cover rounded-lg shadow-md"
                          />
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              removeImage();
                            }}
                            className="cursor-pointer absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-600 transition-colors"
                            >
                            ×
                          </button>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Image Ready</p>
                          <p className="text-sm text-gray-500">Click analyze to process</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            document.getElementById("image").click();
                            removeImage();
                          }}
                          className="cursor-pointer px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          Change
                        </button>
                        <button
                          type="submit"
                          disabled={loading || !image}
                          className="cursor-pointer px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
                        >
                          {loading ? (
                            <>
                              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Analyzing...
                            </>
                          ) : (
                            "Analyze Image"
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Results Section */}
          {result && (
            <section className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-8">
              <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Analysis Complete
                  </h2>
                  <p className="text-gray-600">
                    Your oral image has been processed successfully
                  </p>
                </div>
                <button
                  onClick={navigateToResults}
                  className="cursor-pointer mt-4 sm:mt-0 px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center gap-2"
                >
                  View Detailed Results
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
              
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Processed Image:</h3>
                <div className="flex justify-center">
                  <img
                    alt="Processed result"
                    src={`data:image/jpeg;base64,${result.image}`}
                    className="max-w-full h-auto rounded-lg shadow-md max-h-80 object-contain"
                  />
                </div>
              </div>
            </section>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Take Control of Your Oral Health?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join thousands of users who trust DentAI for their dental health monitoring
          </p>
          <button 
            onClick={() => document.getElementById('upload-section').scrollIntoView({ behavior: 'smooth' })}
            className="cursor-pointer px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
          >
            Start Free Analysis Now
          </button>
        </div>
      </section>
    </main>
  );
}