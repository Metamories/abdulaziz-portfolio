import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Instagram, Send } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-zinc-800 text-white p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold">Abdulaziz Mardonov Abdumajid o‘gli</h1>
        <p className="text-xl text-zinc-400">Junior Programmer</p>
      </header>

      <section className="grid md:grid-cols-2 gap-6 mb-12">
        <Card className="bg-zinc-800">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">About Me</h2>
            <p>
              I'm a junior programmer with a focus on frontend development and design.
              I love working with JavaScript, Python, and design tools like Figma.
              Currently learning and building real projects to sharpen my skills.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-zinc-800">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Skills</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Figma (UI/UX Design)</li>
              <li>JavaScript</li>
              <li>Python</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="grid md:grid-cols-2 gap-6 mb-12">
        <Card className="bg-zinc-800">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Projects</h2>
            <ul className="space-y-3">
              <li>
                <strong>Aura Nova</strong>: Dubbing studio focused on anime and Korean drama localization.
              </li>
              <li>
                <strong>ECOHUB.uz</strong>: Environment-themed platform (details can be expanded).
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-zinc-800">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Education</h2>
            <p>AKITA (Yamamoto IT Academy) – Nurata Campus</p>
            <p>5-month Web Programming Course</p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <Card className="bg-zinc-800">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Contact</h2>
            <ul className="space-y-2">
              <li className="flex items-center gap-2"><Send className="h-4 w-4" /> <a href="https://t.me/mardonoof" target="_blank" className="hover:underline">@mardonoof</a></li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> <a href="mailto:abdulazizmardonov63@gmail.com" className="hover:underline">abdulazizmardonov63@gmail.com</a></li>
              <li className="flex items-center gap-2"><Instagram className="h-4 w-4" /> <a href="https://instagram.com/_mardonooff_" target="_blank" className="hover:underline">@_mardonooff_</a></li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <footer className="text-center text-zinc-500 text-sm mt-10">
        © 2025 Abdulaziz Mardonov. All rights reserved.
      </footer>
    </div>
  );
} 