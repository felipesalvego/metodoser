import { useEffect, useRef, useState } from "react";

import logoKatti from "@/assets/images/logo.png";
import imgHeroBrand from "@/assets/images/hero-brand.png";
import imgKattiDesk from "@/assets/images/katti-desk.png";
import imgKattiWhiteSit from "@/assets/images/katti-white-sit.jpeg";
import imgKattiBrown from "@/assets/images/katti-brown.jpeg";
import imgKattiBlackSit from "@/assets/images/katti-black-sit.jpeg";
import imgKattiBlackClose from "@/assets/images/katti-black-close.jpeg";
import imgKattiWhiteClose from "@/assets/images/katti-white-close.jpeg";

const BUY = "https://link.infinitepay.io/kattielleres-439/VC1DLTEtUg-2ajxVACJrX-127,00";
const WPP = "https://wa.me/5511946033119?text=Quero%20saber%20mais%20detalhes%20do%20Workshop%20M%C3%A9todo%20S.E.R.";
const INSTA = "https://www.instagram.com/kattielleres/";

/* ── Icons ── */
const WppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const InstaIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

/* Reusable Instagram link */
function InstaLink() {
  return (
    <a
      href={INSTA}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex", alignItems: "center", gap: 7,
        color: "rgba(245,237,216,0.55)",
        fontSize: 11, fontWeight: 500, letterSpacing: "0.5px",
        textDecoration: "none",
        transition: "color 0.2s",
        justifyContent: "center",
        marginTop: 6,
      }}
      onMouseEnter={e => (e.currentTarget.style.color = "var(--ouro)")}
      onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,237,216,0.55)")}
    >
      <InstaIcon />
      Conheça a palestrante
    </a>
  );
}

function useReveal(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("vis"); }),
      { threshold: 0.08, rootMargin: "0px 0px -24px 0px" }
    );
    el.querySelectorAll(".reveal").forEach(item => obs.observe(item));
    return () => obs.disconnect();
  }, []);
}

/* ──────────────────────── NAV ──────────────────────── */
function Nav({ compact }: { compact: boolean }) {
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      background: "rgba(13,31,20,0.96)",
      backdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(201,163,80,0.10)",
      padding: compact ? "8px 20px" : "12px 20px",
      transition: "padding 0.3s",
    }}>
      <img
        src={logoKatti}
        alt="Katti Eleres"
        style={{
          height: compact ? 36 : 42,
          width: "auto",
          objectFit: "contain",
          filter: "invert(1) sepia(1) saturate(2) hue-rotate(5deg) brightness(0.92)",
          transition: "height 0.3s",
        }}
      />
      <a href={WPP} className="btn-wpp" style={{ width: "auto", padding: "10px 18px", fontSize: 10, letterSpacing: "1.5px", gap: 6 }}>
        <WppIcon />Fale Conosco
      </a>
    </nav>
  );
}

/* ──────────────────────── HERO ──────────────────────── */
function Hero() {
  return (
    <section style={{ position: "relative", background: "#0a1810" }}>

      {/* Full-bleed photo — fixed height, no svh tricks */}
      <div style={{ position: "relative", width: "100%", height: 420, overflow: "hidden" }}>
        <img
          src={imgHeroBrand}
          alt="Katti Eleres"
          style={{
            width: "100%", height: "100%",
            objectFit: "cover",
            objectPosition: "center 10%",
            display: "block",
          }}
        />
        {/* Top fade for nav */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 120,
          background: "linear-gradient(to bottom, rgba(10,24,16,0.6) 0%, transparent 100%)",
        }} />
        {/* Bottom fade */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "55%",
          background: "linear-gradient(to bottom, transparent 0%, #0a1810 100%)",
        }} />

        {/* Badge */}
        <div style={{
          position: "absolute", top: 80, left: "50%", transform: "translateX(-50%)",
          display: "inline-flex", alignItems: "center", gap: 7,
          border: "1px solid rgba(201,163,80,0.45)",
          background: "rgba(10,24,16,0.60)",
          backdropFilter: "blur(8px)",
          padding: "6px 16px", borderRadius: 100,
          fontSize: 10, fontWeight: 600, letterSpacing: "2px",
          textTransform: "uppercase", color: "var(--ouro)", whiteSpace: "nowrap",
        }}>
          <span className="badge-dot" />
          Oferta Especial · 27 de Maio
        </div>
      </div>

      {/* Content area */}
      <div style={{
        padding: "24px 28px 48px",
        background: "#0a1810",
        textAlign: "center",
      }}>
        <p style={{ fontSize: 10, letterSpacing: "3.5px", textTransform: "uppercase", color: "var(--ouro)", marginBottom: 12 }}>
          2º Workshop · Conexão com Propósito
        </p>

        <h1 style={{ fontFamily: "Cormorant Garamond, serif", lineHeight: 0.92, marginBottom: 8 }}>
          <span style={{
            display: "block",
            fontSize: "clamp(48px, 14vw, 80px)",
            fontWeight: 300,
            color: "transparent",
            WebkitTextStroke: "1.5px rgba(201,163,80,0.5)",
          }}>
            Método
          </span>
          <em style={{
            display: "block",
            fontSize: "clamp(60px, 18vw, 100px)",
            fontWeight: 400,
            fontStyle: "italic",
            color: "var(--ouro)",
          }}>
            S.E.R.
          </em>
        </h1>

        <div style={{ width: 36, height: 1, background: "var(--ouro)", margin: "20px auto" }} />

        <p style={{ fontSize: 13, fontWeight: 400, letterSpacing: "2px", color: "var(--creme)", marginBottom: 8, textTransform: "uppercase" }}>
          Segurança · Essência · Resultado
        </p>
        <p style={{ fontSize: 13, fontWeight: 300, lineHeight: 1.8, color: "var(--texto)", maxWidth: 340, margin: "0 auto 28px" }}>
          Transformação humana alinhada à NR1 — porque normas não mudam culturas, <em>pessoas mudam culturas.</em>
        </p>

        {/* Price highlight */}
        <div style={{ marginBottom: 20 }}>
          <span style={{ fontSize: 12, color: "rgba(245,237,216,0.35)", textDecoration: "line-through", letterSpacing: "1px", marginRight: 10 }}>R$227</span>
          <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(28px, 7vw, 40px)", fontWeight: 600, color: "var(--ouro)" }}>R$127</span>
        </div>

        {/* CTAs */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 380, margin: "0 auto" }}>
          <a href={WPP} className="btn-wpp"><WppIcon />Quero Garantir Minha Vaga</a>
          <a href={BUY} className="btn-outline">✦ Comprar Agora — R$127</a>
          <InstaLink />
        </div>

        <p style={{ marginTop: 16, fontSize: 11, color: "rgba(245,237,216,0.45)" }}>
          <strong style={{ color: "var(--alerta)" }}>⚠ Bônus exclusivo</strong> para os primeiros 10 compradores
        </p>

        {/* Meta strip */}
        <div style={{
          marginTop: 28,
          display: "grid", gridTemplateColumns: "1fr 1px 1fr 1px 1fr",
          borderTop: "1px solid rgba(201,163,80,0.1)",
          paddingTop: 20,
        }}>
          {[
            { label: "Data", value: "27/05" },
            null,
            { label: "Cidade", value: "Belém" },
            null,
            { label: "Valor", value: "R$127" },
          ].map((item, i) =>
            item === null
              ? <div key={i} style={{ background: "rgba(201,163,80,0.15)", width: 1 }} />
              : (
                <div key={i} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 8, letterSpacing: "2px", textTransform: "uppercase", color: "var(--texto)", marginBottom: 4 }}>{item.label}</div>
                  <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(18px, 4vw, 26px)", fontWeight: 600, color: "var(--ouro)", lineHeight: 1 }}>{item.value}</div>
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────── QUOTE ──────────────────────── */
function Quote() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  return (
    <section ref={ref} style={{ padding: "72px 28px", background: "var(--verde-mid)", textAlign: "center", position: "relative", overflow: "hidden" }}>
      <div aria-hidden style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%,-55%)",
        fontFamily: "Cormorant Garamond, serif",
        fontSize: "clamp(140px, 45vw, 360px)",
        color: "rgba(201,163,80,0.035)",
        userSelect: "none", pointerEvents: "none", lineHeight: 1,
      }}>❝</div>
      <p className="reveal" style={{
        fontFamily: "Cormorant Garamond, serif",
        fontSize: "clamp(22px, 5.5vw, 40px)",
        fontWeight: 300, fontStyle: "italic",
        color: "var(--creme)", maxWidth: 680,
        margin: "0 auto 18px", lineHeight: 1.55,
        position: "relative", zIndex: 2,
      }}>
        O que mais coloca uma empresa em risco hoje não é o ambiente.{" "}
        <strong style={{ fontStyle: "normal", color: "var(--ouro)" }}>É o comportamento.</strong>
      </p>
      <p className="reveal" style={{ fontSize: 10, letterSpacing: "3px", textTransform: "uppercase", color: "var(--ouro)", position: "relative", zIndex: 2 }}>
        — transformação em 27/05 · Belém, PA
      </p>
    </section>
  );
}

/* ──────────────────────── PROBLEMA ──────────────────────── */
function Problema() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  return (
    <section ref={ref} style={{ background: "var(--verde)" }}>

      <div className="reveal" style={{ position: "relative", width: "100%", height: 300, overflow: "hidden" }}>
        <img
          src={imgKattiBrown}
          alt="Katti Eleres"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 15%", filter: "brightness(0.75) contrast(1.05)" }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, transparent 30%, rgba(13,31,20,0.92) 100%)",
        }} />
        <div style={{ position: "absolute", bottom: 24, left: 24, right: 24, zIndex: 2 }}>
          <p style={{
            fontFamily: "Cormorant Garamond, serif",
            fontStyle: "italic", fontSize: 17,
            color: "var(--ouro-light)", lineHeight: 1.55,
          }}>
            "Empresas que não desenvolvem pessoas de dentro para fora falham em sustentar resultados."
          </p>
        </div>
      </div>

      <div style={{ padding: "48px 28px 64px", maxWidth: 640, margin: "0 auto" }}>
        <span className="reveal s-eyebrow">O Diagnóstico</span>
        <h2 className="reveal s-heading" style={{ marginBottom: 20 }}>
          Normas existem.<br />
          Treinamentos acontecem.<br />
          <em>Os riscos permanecem.</em>
        </h2>
        <div className="reveal gold-line" />
        {[
          <>Porque ninguém está trabalhando a raiz do problema: <strong style={{ color: "var(--creme)" }}>o comportamento humano.</strong></>,
          <>A NR1 exige gerenciamento de riscos ocupacionais. Mas o maior risco não está no ambiente — está nas pessoas que operam dentro dele.</>,
          <>O Método S.E.R. nasce para quebrar esse ciclo. <em style={{ fontStyle: "italic", color: "var(--ouro-light)" }}>De dentro para fora.</em></>,
        ].map((t, i) => (
          <p key={i} className="reveal s-body" style={{ marginBottom: 14 }}>{t}</p>
        ))}

        <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 28 }}>
          <a href={WPP} className="btn-wpp"><WppIcon />Quero Saber Mais</a>
          <InstaLink />
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────── MÉTODO ──────────────────────── */
function Metodo() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  const steps = [
    {
      n: "01", letter: "S", title: "Sensibilização e Segurança Consciente",
      desc: "Ativação emocional e racional que desperta consciência sobre comportamento, risco e responsabilidade — conectando vida pessoal ao ambiente de trabalho e à NR1 como propósito, não obrigação.",
      pills: ["Percepção de risco", "NR1 aplicada", "Ativação emocional"],
      result: 'Deixa de "cumprir regra" e começa a entender o porquê.',
    },
    {
      n: "02", letter: "E", title: "Essência e Engajamento",
      desc: "Reprogramação de comportamento, crenças e identidade. Comunicação, posicionamento, inteligência emocional e responsabilidade individual.",
      pills: ["Crenças limitantes", "Int. emocional", "Protagonismo"],
      result: "Colaboradores deixam de ser reativos e passam a ser engajados.",
    },
    {
      n: "03", letter: "R", title: "Resultado e Responsabilidade",
      desc: "Cultura de prevenção ativa, comunicação assertiva, liderança fortalecida. A NR1 se transforma de documento em cultura viva dentro da organização.",
      pills: ["Plano de ação", "Indicadores", "Liderança"],
      result: "Mais segurança. Mais produtividade. Mais consciência coletiva.",
    },
  ];

  return (
    <section ref={ref} style={{ background: "var(--verde-mid)", position: "relative", overflow: "hidden" }}>
      <div aria-hidden style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%,-50%)",
        fontFamily: "Cormorant Garamond, serif",
        fontSize: "clamp(110px, 36vw, 280px)",
        fontWeight: 700, color: "rgba(201,163,80,0.028)",
        whiteSpace: "nowrap", userSelect: "none", pointerEvents: "none", letterSpacing: "-4px",
      }}>S·E·R</div>

      <div style={{ padding: "64px 28px 40px", textAlign: "center" }}>
        <span className="reveal s-eyebrow" style={{ display: "block", textAlign: "center" }}>A Metodologia</span>
        <h2 className="reveal s-heading" style={{ textAlign: "center" }}>A Jornada <em>S.E.R.</em></h2>
        <p className="reveal" style={{ fontSize: 13, fontWeight: 300, color: "var(--texto)", marginTop: 14, maxWidth: 440, margin: "14px auto 0", lineHeight: 1.8 }}>
          Três etapas que transformam comportamento em cultura e norma em consciência.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "rgba(255,255,255,0.05)" }}>
        {steps.map((s) => (
          <div key={s.letter} className="reveal step-card" style={{ padding: "32px 28px" }}>
            <div style={{ maxWidth: 620, margin: "0 auto", display: "flex", gap: 20, alignItems: "flex-start" }}>
              <div style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(60px, 16vw, 80px)",
                fontWeight: 600, lineHeight: 0.85,
                color: "transparent",
                WebkitTextStroke: "1px rgba(201,163,80,0.3)",
                flexShrink: 0, marginTop: 2,
              }}>{s.letter}</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                  <span style={{ fontSize: 9, letterSpacing: "3px", textTransform: "uppercase", color: "var(--ouro)" }}>Etapa {s.n}</span>
                </div>
                <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(18px, 4vw, 22px)", fontWeight: 400, color: "var(--creme)", marginBottom: 10, lineHeight: 1.2 }}>{s.title}</h3>
                <p style={{ fontSize: 13, fontWeight: 300, lineHeight: 1.8, color: "var(--texto)", marginBottom: 14 }}>{s.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 14 }}>
                  {s.pills.map(p => (
                    <span key={p} style={{ fontSize: 9, letterSpacing: "1.5px", textTransform: "uppercase", padding: "4px 10px", border: "1px solid rgba(201,163,80,0.18)", color: "rgba(245,237,216,0.45)", borderRadius: 1 }}>{p}</span>
                  ))}
                </div>
                <div style={{ borderLeft: "2px solid var(--ouro)", paddingLeft: 12, paddingBlock: 6, background: "rgba(201,163,80,0.04)", fontFamily: "Cormorant Garamond, serif", fontStyle: "italic", fontSize: 14, color: "var(--ouro-light)", lineHeight: 1.5 }}>{s.result}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ height: 64 }} />
    </section>
  );
}

/* ──────────────────────── DIFERENCIAIS ──────────────────────── */
function Diferenciais() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  const diffs = [
    { old: "Treinamento comum", novo: "Transformação de dentro para fora" },
    { old: "Palestra informativa", novo: "Ativação de consciência" },
    { old: "Cumprimento de norma", novo: "Cultura aplicada no dia a dia" },
  ];
  return (
    <section ref={ref} style={{ background: "var(--verde)", padding: "64px 28px" }}>
      <div style={{ maxWidth: 620, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <span className="reveal s-eyebrow" style={{ display: "block", textAlign: "center" }}>Diferencial</span>
          <h2 className="reveal s-heading" style={{ textAlign: "center" }}>Não é o que você espera.<br /><em>É além.</em></h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "rgba(255,255,255,0.05)" }}>
          {diffs.map((d, i) => (
            <div key={i} className="reveal diff-card" style={{ padding: "26px 24px" }}>
              <p style={{ fontSize: 12, color: "rgba(245,237,216,0.25)", textDecoration: "line-through", marginBottom: 8, letterSpacing: "0.3px" }}>✗ {d.old}</p>
              <p style={{ fontSize: 16, color: "var(--ouro)", marginBottom: 8 }}>↓</p>
              <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(18px, 4vw, 24px)", fontWeight: 400, color: "var(--creme)", lineHeight: 1.25 }}>{d.novo}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────── PHOTO STRIP ──────────────────────── */
function PhotoStrip() {
  const photos = [
    { src: imgKattiBlackClose, pos: "center 10%" },
    { src: imgKattiWhiteClose, pos: "center 5%" },
    { src: imgKattiBlackSit, pos: "center top" },
  ];
  return (
    <div style={{ display: "flex", gap: 2, height: 260, overflow: "hidden", background: "var(--verde)" }}>
      {photos.map((p, i) => (
        <div key={i} style={{ flex: 1, overflow: "hidden", position: "relative" }}>
          <img src={p.src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: p.pos, display: "block", filter: "brightness(0.78) contrast(1.04)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,31,20,0.5) 0%, transparent 50%)" }} />
        </div>
      ))}
    </div>
  );
}

/* ──────────────────────── OFERTA ──────────────────────── */
function Oferta() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  return (
    <section ref={ref} id="comprar" style={{ background: "var(--verde-mid)", padding: "64px 28px", position: "relative", overflow: "hidden" }}>
      <div aria-hidden style={{
        position: "absolute", right: -16, top: "50%", transform: "translateY(-50%)",
        fontFamily: "Cormorant Garamond, serif",
        fontSize: "clamp(70px, 26vw, 200px)",
        fontWeight: 700, color: "rgba(201,163,80,0.035)",
        pointerEvents: "none", userSelect: "none", whiteSpace: "nowrap",
      }}>27/05</div>

      <div style={{ maxWidth: 520, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <span className="reveal s-eyebrow">🎯 Oferta Especial</span>
        <h2 className="reveal s-heading" style={{ marginBottom: 14 }}>
          Vagas Abertas<br /><em>Garanta a Sua</em>
        </h2>
        <div className="reveal gold-line" />
        <p className="reveal s-body" style={{ marginBottom: 8 }}>
          No dia <strong style={{ color: "var(--creme)" }}>27/05</strong> Katti Eleres conduz o 2º Workshop: Conexão com Propósito —
        </p>
        <p className="reveal" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 20, fontStyle: "italic", color: "var(--ouro-light)", marginBottom: 10 }}>NR1 & Comportamento</p>
        <p className="reveal s-body" style={{ marginBottom: 36 }}>Quem decide agora, acessa um preço especial. Após as primeiras vagas, o valor volta para R$227.</p>

        {/* Card */}
        <div className="reveal" style={{
          background: "var(--verde-card)",
          border: "1px solid rgba(201,163,80,0.25)",
          padding: "28px 24px",
          position: "relative", overflow: "hidden",
        }}>
          <div aria-hidden style={{ position: "absolute", top: 0, right: 0, width: 120, height: 120, background: "radial-gradient(circle, rgba(201,163,80,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

          <p style={{ fontSize: 9, letterSpacing: "3px", textTransform: "uppercase", color: "var(--ouro)", marginBottom: 4 }}>Valor especial</p>

          {/* Price with strikethrough */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
            <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 22, fontWeight: 300, color: "rgba(245,237,216,0.3)", textDecoration: "line-through" }}>R$227</span>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
              <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 20, fontWeight: 300, color: "var(--ouro-light)", marginTop: 6 }}>R$</span>
              <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(52px, 16vw, 72px)", fontWeight: 300, color: "var(--ouro-light)", lineHeight: 1 }}>127</span>
            </div>
          </div>
          <p style={{ fontSize: 12, color: "var(--texto)", marginBottom: 24 }}>Acesso completo — Workshop 27 de maio · Belém, PA</p>

          {/* Bonus */}
          <div style={{ background: "rgba(201,163,80,0.06)", border: "1px solid rgba(201,163,80,0.18)", padding: "26px 18px 18px", marginBottom: 20, position: "relative" }}>
            <span style={{
              position: "absolute", top: -10, left: 14,
              background: "var(--ouro)", color: "#0D1F14",
              fontSize: 9, fontWeight: 700, letterSpacing: "2px",
              padding: "3px 10px", textTransform: "uppercase", whiteSpace: "nowrap",
            }}>🔹 Bônus · Primeiros 10 compradores</span>
            <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 18, fontWeight: 500, color: "var(--creme)", marginBottom: 8, lineHeight: 1.3 }}>
              Sessão de Realinhamento e Ativação de Consciência
            </h3>
            <p style={{ fontSize: 13, color: "var(--texto)", lineHeight: 1.7, marginBottom: 8 }}>
              40–50 minutos individuais com Katti Eleres.<br />Não é conteúdo. É uma experiência.
            </p>
            <p style={{ fontSize: 10, fontWeight: 700, color: "var(--alerta)", letterSpacing: "1.5px", textTransform: "uppercase" }}>
              ⚠ Quando essas vagas acabarem… acabou.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <a href={WPP} className="btn-wpp"><WppIcon />Quero Garantir Minha Vaga</a>
            <a href={BUY} className="btn-outline">✦ Comprar Diretamente — R$127</a>
            <InstaLink />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────── KATTI ──────────────────────── */
function Katti() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  return (
    <section ref={ref} style={{ background: "var(--verde)" }}>

      <div className="reveal" style={{ position: "relative", width: "100%", height: 460, overflow: "hidden" }}>
        <img
          src={imgKattiWhiteSit}
          alt="Katti Eleres"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 5%", filter: "brightness(0.82) contrast(1.06)" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, rgba(13,31,20,0.98) 100%)" }} />
        <div style={{ position: "absolute", bottom: 28, left: 28, right: 28, zIndex: 2 }}>
          <span className="s-eyebrow">Quem conduz</span>
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(44px, 12vw, 64px)", fontWeight: 400, lineHeight: 0.95, color: "var(--creme)" }}>
            Katti <em style={{ fontStyle: "italic", color: "var(--ouro)" }}>Eleres</em>
          </h2>
        </div>
      </div>

      <div style={{ padding: "36px 28px 64px", maxWidth: 620, margin: "0 auto" }}>

        <div className="reveal" style={{ display: "flex", gap: 18, alignItems: "flex-start", marginBottom: 20 }}>
          <div style={{ flexShrink: 0, width: 88, height: 110, overflow: "hidden", border: "1px solid rgba(201,163,80,0.2)" }}>
            <img src={imgKattiDesk} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
          </div>
          <p className="s-body">
            Mentora para empresários de alto valor. Especialista em comportamento organizacional, desenvolvimento humano e cultura de segurança consciente.
          </p>
        </div>

        <p className="reveal s-body" style={{ marginBottom: 14 }}>
          Criadora do Método S.E.R. — metodologia exclusiva que une desenvolvimento humano profundo com as exigências práticas da NR1, transformando normas em cultura viva.
        </p>
        <p className="reveal s-body" style={{ marginBottom: 24 }}>
          Sua abordagem não é sobre treinamento. É sobre ativação — despertar o potencial que já está nas pessoas para sustentar resultados reais.
        </p>

        <div className="reveal" style={{ background: "var(--ouro)", color: "#0D1F14", padding: "18px 22px", marginBottom: 24 }}>
          <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 18, fontStyle: "italic", fontWeight: 500, lineHeight: 1.5 }}>
            "Antes de cumprir normas, é preciso despertar consciência."
          </p>
          <p style={{ fontSize: 9, fontWeight: 700, marginTop: 8, letterSpacing: "2px", textTransform: "uppercase", opacity: 0.6 }}>— Katti Eleres</p>
        </div>

        <div className="reveal" style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
          {["Mentoria", "NR1", "Comportamento", "Liderança", "Cultura Organizacional"].map(t => (
            <span key={t} style={{ fontSize: 9, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--ouro)", border: "1px solid rgba(201,163,80,0.3)", padding: "6px 12px", borderRadius: 1 }}>{t}</span>
          ))}
        </div>

        <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <a href={WPP} className="btn-wpp"><WppIcon />Falar com Katti no WhatsApp</a>
          <a href={BUY} className="btn-outline">✦ Garantir Minha Vaga — R$127</a>
          <InstaLink />
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────── LOCAL ──────────────────────── */
function Local() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  return (
    <section ref={ref} style={{ padding: "64px 28px", background: "var(--verde-mid)", textAlign: "center", position: "relative", overflow: "hidden" }}>
      <div aria-hidden style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", fontSize: "clamp(120px, 45vw, 260px)", opacity: 0.025, userSelect: "none", pointerEvents: "none" }}>📍</div>
      <span className="reveal s-eyebrow" style={{ display: "block", textAlign: "center", marginBottom: 14 }}>Local do Evento</span>
      <div className="reveal" style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        background: "rgba(201,163,80,0.08)", border: "1px solid rgba(201,163,80,0.28)",
        padding: "7px 18px", borderRadius: 100, marginBottom: 24,
        fontSize: 10, color: "var(--ouro)", letterSpacing: "2px", textTransform: "uppercase" as const,
        position: "relative", zIndex: 2,
      }}>📍 Belém — Pará</div>
      <p className="reveal" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(18px, 4vw, 28px)", fontWeight: 300, fontStyle: "italic", color: "var(--texto)", maxWidth: 540, margin: "0 auto 14px", lineHeight: 1.65, position: "relative", zIndex: 2 }}>
        "Local será revelado em breve. Estamos preparando uma experiência à altura do que será vivido."
      </p>
      <p className="reveal" style={{ fontSize: 12, color: "rgba(245,237,216,0.36)", maxWidth: 420, margin: "0 auto 24px", lineHeight: 1.7, position: "relative", zIndex: 2 }}>
        "Não é sobre participar de um workshop. É sobre entrar em um nível que a maioria ainda não acessou."
      </p>
      <div className="reveal" style={{ display: "flex", justifyContent: "center" }}>
        <a href={WPP} className="btn-wpp" style={{ maxWidth: 360 }}><WppIcon />Tirar Dúvidas no WhatsApp</a>
      </div>
    </section>
  );
}

/* ──────────────────────── FINAL CTA ──────────────────────── */
function FinalCTA() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  return (
    <section ref={ref} style={{ padding: "88px 28px", background: "var(--verde)", textAlign: "center", position: "relative", overflow: "hidden" }}>
      <div aria-hidden style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(201,163,80,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
      <span className="reveal s-eyebrow" style={{ display: "block", textAlign: "center", marginBottom: 16 }}>Última Chamada</span>
      <h2 className="reveal s-heading" style={{ textAlign: "center", fontSize: "clamp(30px, 8vw, 58px)", position: "relative", zIndex: 1 }}>
        Você vai esperar<br />o preço subir<br /><em>ou age agora?</em>
      </h2>
      <div className="reveal" style={{ width: 36, height: 1, background: "var(--ouro)", margin: "26px auto", position: "relative", zIndex: 1 }} />

      {/* Price reminder */}
      <div className="reveal" style={{ marginBottom: 20, position: "relative", zIndex: 1 }}>
        <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 16, color: "rgba(245,237,216,0.3)", textDecoration: "line-through", marginRight: 10 }}>R$227</span>
        <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(28px, 7vw, 44px)", fontWeight: 600, color: "var(--ouro)" }}>R$127</span>
      </div>

      <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 380, margin: "0 auto 18px", position: "relative", zIndex: 1 }}>
        <a href={WPP} className="btn-wpp"><WppIcon />Quero Garantir Minha Vaga</a>
        <a href={BUY} className="btn-outline">✦ Comprar Agora — R$127</a>
        <InstaLink />
      </div>
      <p className="reveal" style={{ fontSize: 11, color: "rgba(245,237,216,0.4)", position: "relative", zIndex: 1 }}>
        <strong style={{ color: "var(--alerta)" }}>⚠ Bônus</strong> para os 10 primeiros · 27 de maio · Belém, PA
      </p>
    </section>
  );
}

/* ──────────────────────── FOOTER ──────────────────────── */
function Footer() {
  return (
    <footer style={{ background: "var(--verde-mid)", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "32px 24px", textAlign: "center" }}>
      <img
        src={logoKatti}
        alt="Katti Eleres"
        style={{
          height: 52,
          width: "auto",
          objectFit: "contain",
          filter: "invert(1) sepia(1) saturate(2) hue-rotate(5deg) brightness(0.85)",
          marginBottom: 12,
          opacity: 0.85,
        }}
      />
      <div style={{ display: "flex", justifyContent: "center", gap: 20, marginBottom: 12 }}>
        <a href={WPP} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "rgba(245,237,216,0.45)", textDecoration: "none" }}>
          <WppIcon />WhatsApp
        </a>
        <a href={INSTA} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "rgba(245,237,216,0.45)", textDecoration: "none" }}>
          <InstaIcon />Instagram
        </a>
      </div>
      <p style={{ fontSize: 10, color: "rgba(245,237,216,0.28)", letterSpacing: "1px" }}>Mentoria para Empresários de Alto Valor · Método S.E.R. · 2026</p>
    </footer>
  );
}

/* ──────────────────────── STICKY ──────────────────────── */
function Sticky({ show }: { show: boolean }) {
  return (
    <div className={`sticky-bar${show ? " on" : ""}`}>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, maxWidth: 400, margin: "0 auto" }}>
        <p style={{ fontSize: 10, color: "var(--texto)", textAlign: "center", letterSpacing: "0.5px" }}>
          <strong style={{ color: "var(--alerta)" }}>⚠ Vagas Limitadas</strong> · Bônus para os primeiros 10
        </p>
        <a href={WPP} className="btn-wpp" style={{ fontSize: 11 }}><WppIcon />Fale Conosco · Vagas Limitadas</a>
      </div>
    </div>
  );
}

/* ──────────────────────── ROOT ──────────────────────── */
export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  useEffect(() => {
    const fn = () => { setScrolled(window.scrollY > 50); setShowSticky(window.scrollY > 400); };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div style={{ background: "var(--verde)", minHeight: "100vh" }}>
      <Nav compact={scrolled} />
      <Hero />
      <Quote />
      <Problema />
      <Metodo />
      <Diferenciais />
      <PhotoStrip />
      <Oferta />
      <Katti />
      <Local />
      <FinalCTA />
      <Footer />
      <Sticky show={showSticky} />
      {showSticky && <div style={{ height: 100 }} />}
    </div>
  );
}
