"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Text, Float, PerspectiveCamera, Environment } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import * as THREE from "three"
import { useScroll } from "./scroll-context"
import { SafeIntersectionObserver } from "./safe-intersection-observer"

function AnimatedSphere({ position = [0, 0, 0], color = "#954ce9" }) {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (!meshRef.current) return
    try {
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2
      meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.2
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2
    } catch (error) {
      console.warn("Animation error:", error)
    }
  })

  return (
    <mesh ref={meshRef} position={position as any} castShadow>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial color={color} roughness={0.2} metalness={0.8} envMapIntensity={0.8} />
    </mesh>
  )
}

function FloatingText({ isDarkMode }: { isDarkMode: boolean }) {
  const textColor = isDarkMode ? "#ffffff" : "#1a1a1a"

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5} position={[0, 0, -1]}>
      <Text
        font="/fonts/Geist-Bold.woff2"
        fontSize={0.5}
        color={textColor}
        anchorX="center"
        anchorY="middle"
        position={[0, 0, 0]}
        maxWidth={4}
        textAlign="center"
      >
        Full Stack Developer
      </Text>
    </Float>
  )
}

function ParticleField({ count = 500, isDarkMode }: { count?: number; isDarkMode: boolean }) {
  const mesh = useRef<THREE.InstancedMesh>(null!)
  const particleColor = isDarkMode ? "#ffffff" : "#000000"

  useEffect(() => {
    if (!mesh.current) return

    try {
      const dummy = new THREE.Object3D()
      const particles = count

      for (let i = 0; i < particles; i++) {
        const x = (Math.random() - 0.5) * 15
        const y = (Math.random() - 0.5) * 15
        const z = (Math.random() - 0.5) * 15

        dummy.position.set(x, y, z)
        dummy.updateMatrix()
        mesh.current.setMatrixAt(i, dummy.matrix)
      }

      mesh.current.instanceMatrix.needsUpdate = true
    } catch (error) {
      console.warn("Particle setup error:", error)
    }
  }, [count])

  useFrame((state) => {
    if (!mesh.current) return
    try {
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.02
    } catch (error) {
      console.warn("Particle animation error:", error)
    }
  })

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.02, 8, 8]} />
      <meshBasicMaterial color={particleColor} transparent opacity={0.6} />
    </instancedMesh>
  )
}

export default function Hero3D() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [canRender3D, setCanRender3D] = useState(false)
  const { scrollToSection } = useScroll()

  useEffect(() => {
    setIsMounted(true)
    // Delay 3D rendering to ensure everything is mounted
    const timer = setTimeout(() => {
      setCanRender3D(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isMounted || typeof window === "undefined") return

    const checkDarkMode = () => {
      try {
        const isDark = document.documentElement.classList.contains("dark")
        setIsDarkMode(isDark)
      } catch (error) {
        console.warn("Dark mode check failed:", error)
      }
    }

    checkDarkMode()

    let observer: MutationObserver | null = null

    try {
      observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === "class") {
            checkDarkMode()
          }
        })
      })

      const htmlElement = document.documentElement
      if (htmlElement) {
        observer.observe(htmlElement, { attributes: true })
      }
    } catch (error) {
      console.warn("MutationObserver failed:", error)
    }

    return () => {
      if (observer) {
        observer.disconnect()
      }
    }
  }, [isMounted])

  if (!isMounted) {
    return (
      <section id="home" className="min-h-screen flex flex-col items-center justify-center relative pt-16">
        <div className="container max-w-4xl text-center z-10 mt-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Hi, I'm <span className="text-primary">Maneesh Kumar</span>
          </h1>
          <div className="h-20 md:h-24 relative mb-8"></div>
        </div>
      </section>
    )
  }

  return (
    <SafeIntersectionObserver
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative pt-16"
    >
      {canRender3D && (
        <div className="absolute inset-0 -z-10">
          <Canvas shadows>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
            <AnimatedSphere position={[-2, 0.5, -1]} color="#954ce9" />
            <AnimatedSphere position={[2, -0.5, -2]} color="#4c9ee9" />
            <ParticleField isDarkMode={isDarkMode} />
            <Environment preset="city" />
          </Canvas>
        </div>
      )}

      <div className="container max-w-4xl text-center z-10 mt-20">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 opacity-0 translate-y-4 transition-all duration-700 delay-100">
          Hi, I'm <span className="text-primary">Maneesh Kumar</span>
        </h1>

        <div className="h-20 md:h-24 relative mb-8">
          {canRender3D && (
            <Canvas className="!absolute inset-0">
              <FloatingText isDarkMode={isDarkMode} />
            </Canvas>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 translate-y-4 transition-all duration-700 delay-500">
          <Button size="lg" className="text-base" onClick={() => scrollToSection("#experience")}>
            View My Work
          </Button>
          <Button size="lg" variant="outline" className="text-base">
            Download CV
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <Button variant="ghost" size="icon" onClick={() => scrollToSection("#about")} aria-label="Scroll down">
          <ArrowDown size={24} />
        </Button>
      </div>
    </SafeIntersectionObserver>
  )
}
