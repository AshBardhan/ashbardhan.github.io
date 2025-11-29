// Utility functions for GSAP animations
// Import GSAP when needed: import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Initialize GSAP ScrollTrigger animations for enhanced scroll effects
 * Uncomment and use when GSAP is fully integrated
 */
export function initGSAPAnimations() {
  // Example: Parallax effect on hero section
  // gsap.registerPlugin(ScrollTrigger);
  // Hero animations
  // gsap.from('.hero-title', {
  //   duration: 1,
  //   y: 100,
  //   opacity: 0,
  //   ease: 'power3.out',
  // });
  // Stagger social links
  // gsap.from('.social-link', {
  //   duration: 0.5,
  //   y: 20,
  //   opacity: 0,
  //   stagger: 0.1,
  //   delay: 0.5,
  //   ease: 'power2.out',
  // });
  // Scroll-triggered section reveals
  // const sections = gsap.utils.toArray('.reveal');
  // sections.forEach((section: any) => {
  //   gsap.from(section, {
  //     scrollTrigger: {
  //       trigger: section,
  //       start: 'top 80%',
  //       end: 'bottom 20%',
  //       toggleActions: 'play none none reverse',
  //     },
  //     y: 50,
  //     opacity: 0,
  //     duration: 1,
  //     ease: 'power3.out',
  //   });
  // });
}

/**
 * Animate elements on hover with GSAP
 */
export function initHoverAnimations() {
  // Project cards hover effect
  // const projectCards = document.querySelectorAll('.project-card');
  // projectCards.forEach((card) => {
  //   card.addEventListener('mouseenter', () => {
  //     gsap.to(card, { scale: 1.03, duration: 0.3, ease: 'power2.out' });
  //   });
  //   card.addEventListener('mouseleave', () => {
  //     gsap.to(card, { scale: 1, duration: 0.3, ease: 'power2.out' });
  //   });
  // });
}
