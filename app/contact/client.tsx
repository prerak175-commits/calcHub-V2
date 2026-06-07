"use client";

import { useState } from 'react';
import { Mail, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export function ContactClient() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight mb-4">Contact Us</h1>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Have a question, found an error, or want to suggest a new calculator? We would love to hear from you.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-secondary/30 rounded-xl p-5 border border-border/50 flex items-start gap-3">
            <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-semibold">Email</h3>
              <p className="text-xs text-muted-foreground mt-1">hello@calchub.com</p>
            </div>
          </div>
          <div className="bg-secondary/30 rounded-xl p-5 border border-border/50 flex items-start gap-3">
            <MessageSquare className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-semibold">Feedback</h3>
              <p className="text-xs text-muted-foreground mt-1">Use the form below to share your thoughts</p>
            </div>
          </div>
        </div>

        {submitted ? (
          <Card className="border-primary/20">
            <CardContent className="p-8 text-center">
              <h2 className="text-lg font-semibold mb-2">Message Sent</h2>
              <p className="text-sm text-muted-foreground">Thank you for reaching out. We will get back to you as soon as possible.</p>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-base">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="you@example.com" required />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="What is this about?" required />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message..." rows={5} required />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
