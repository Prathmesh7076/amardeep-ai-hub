import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "What makes your AI consulting approach unique?",
    answer: "My approach combines deep technical expertise with strategic business acumen. I focus on practical, measurable outcomes rather than just technological implementation. Each solution is tailored to your specific industry context and business objectives, ensuring AI delivers real value from day one."
  },
  {
    question: "How do you ensure AI implementations are ethical and responsible?",
    answer: "Ethical AI is fundamental to my practice. I establish comprehensive governance frameworks that include bias detection and mitigation, transparency requirements, privacy protection, and ongoing monitoring. Every AI solution includes ethical guidelines and responsible deployment practices."
  },
  {
    question: "What industries do you specialize in?",
    answer: "I work across multiple industries including healthcare, finance, manufacturing, retail, education, and government. My expertise spans various AI applications from predictive analytics and natural language processing to computer vision and robotics automation."
  },
  {
    question: "How long does a typical AI project take?",
    answer: "Project timelines vary based on scope and complexity. Strategy consulting engagements typically take 4-8 weeks, while full AI implementation projects range from 3-12 months. I always start with a detailed assessment to provide accurate timelines and milestones."
  },
  {
    question: "What's the typical ROI for AI implementations?",
    answer: "ROI varies significantly by industry and use case, but my clients typically see 300-500% returns within 12-18 months. This includes cost savings from automation, revenue increases from improved insights, and efficiency gains from optimized processes."
  },
  {
    question: "Do you provide ongoing support after implementation?",
    answer: "Yes, I offer comprehensive post-implementation support including performance monitoring, model optimization, team training, and strategic guidance. AI systems require ongoing maintenance and refinement to maintain peak performance."
  },
  {
    question: "How do you handle data privacy and security concerns?",
    answer: "Data privacy and security are paramount. I implement robust security frameworks including encryption, access controls, compliance with regulations like GDPR and CCPA, and regular security audits. All data handling follows industry best practices and legal requirements."
  },
  {
    question: "Can you work with our existing technology infrastructure?",
    answer: "Absolutely. I specialize in integrating AI solutions with existing systems and legacy infrastructure. My approach includes comprehensive technology assessments and phased implementation strategies to minimize disruption while maximizing value."
  },
  {
    question: "What level of AI expertise does our team need?",
    answer: "You don't need existing AI expertise. I provide comprehensive training and knowledge transfer to your team, from executive briefings to technical workshops. I also offer ongoing mentoring to build internal AI capabilities."
  },
  {
    question: "How do you measure the success of AI projects?",
    answer: "Success is measured through clearly defined KPIs established at project onset, including business metrics like ROI, efficiency gains, cost savings, and user satisfaction. I provide regular reporting and performance dashboards to track progress and outcomes."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            Frequently Asked Questions
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
            Common Questions <span className="text-gradient">Answered</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to the most common questions about AI consulting, implementation, 
            and how we can work together to transform your business.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-lg border border-border/50 px-6 data-[state=open]:shadow-soft"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-heading font-semibold text-lg pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-soft">
              <MessageCircle className="h-12 w-12 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-heading font-bold mb-4">
                Still Have Questions?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Don't see your question answered here? I'm always happy to discuss your specific 
                needs and provide personalized guidance for your AI journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="group">
                  Schedule a Call
                  <MessageCircle className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}