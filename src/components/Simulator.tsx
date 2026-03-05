import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import InputMask from "react-input-mask";
import marqueeLogo from "@/assets/marquee-logo.png";

interface FormData {
  nome: string;
  idade: string;
  telefone: string;
  whatsapp: string;
  cidade: string;
  bairro: string;
  observacao: string;
}

const Simulator = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    idade: "",
    telefone: "",
    whatsapp: "",
    cidade: "",
    bairro: "",
    observacao: ""
  });

  const canAdvanceStep1 = () => formData.nome.trim() !== "" && formData.idade.trim() !== "";
  const canAdvanceStep2 = () =>
    formData.telefone.replace(/\D/g, "").length >= 10 &&
    formData.whatsapp.replace(/\D/g, "").length === 11;
  const canSubmit = () => formData.cidade.trim() !== "" && formData.bairro.trim() !== "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit()) return;

    setIsSubmitting(true);
    try {
      const now = new Date();
      const dataEntrada = `${String(now.getDate()).padStart(2, "0")}-${String(now.getMonth() + 1).padStart(2, "0")}-${now.getFullYear()}`;

      const webhookData = {
        "Data de Entrada": dataEntrada,
        "Nome": formData.nome,
        "Idade": formData.idade,
        "Telefone": formData.telefone,
        "WhatsApp": formData.whatsapp,
        "Cidade": formData.cidade,
        "Bairro": formData.bairro,
        "Observação": formData.observacao
      };

      await fetch("https://hook.us1.make.com/9nlkmpsmdc786fznp6wu02qidsdou6p7", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(webhookData),
      });

      toast({
        title: "Candidatura enviada!",
        description: "Em breve entraremos em contato.",
      });

      navigate("/obrigado");
    } catch (error) {
      console.error("Erro ao enviar candidatura:", error);
      toast({
        title: "Erro ao enviar",
        description: "Por favor, tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const update = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <>
      {/* Marquee bar */}
      <div className="w-full bg-primary overflow-hidden py-3">
        <div className="flex w-max marquee-track">
          {[0, 1].map((set) =>
            Array.from({ length: 10 }).map((_, i) => (
              <img key={`${set}-${i}`} src={marqueeLogo} alt="" className="h-8 mx-6 flex-shrink-0" />
            ))
          )}
        </div>
      </div>

      <section id="candidatura" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
              CANDIDATE-SE
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Para se candidatar preencha as perguntas abaixo
            </h2>
            <p className="text-muted-foreground">Entraremos em contato com você</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10 space-y-6">
            {/* Progress */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Etapa {step} de 3</span>
                <span>{Math.round((step / 3) * 100)}%</span>
              </div>
              <Progress value={(step / 3) * 100} className="h-2" />
            </div>

            {/* Step 1 */}
            {step === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome completo</Label>
                  <Input id="nome" value={formData.nome} onChange={(e) => update("nome", e.target.value)} placeholder="Seu nome completo" className="p-5" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="idade">Sua idade</Label>
                  <Input id="idade" value={formData.idade} onChange={(e) => update("idade", e.target.value)} placeholder="Ex: 25" className="p-5" type="number" min="16" max="99" />
                </div>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="telefone">Número que você recebe ligação</Label>
                  <InputMask mask="(99) 99999-9999" value={formData.telefone} onChange={(e) => update("telefone", e.target.value)}>
                    {/* @ts-ignore */}
                    {(inputProps: any) => <Input {...inputProps} id="telefone" placeholder="(00) 00000-0000" className="p-5" />}
                  </InputMask>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="whatsapp">Número WhatsApp</Label>
                  <InputMask mask="(99) 99999-9999" value={formData.whatsapp} onChange={(e) => update("whatsapp", e.target.value)}>
                    {/* @ts-ignore */}
                    {(inputProps: any) => <Input {...inputProps} id="whatsapp" placeholder="(00) 00000-0000" className="p-5" />}
                  </InputMask>
                </div>
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="cidade">Cidade</Label>
                    <Input id="cidade" value={formData.cidade} onChange={(e) => update("cidade", e.target.value)} placeholder="Sua cidade" className="p-5" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bairro">Bairro que mora</Label>
                    <Input id="bairro" value={formData.bairro} onChange={(e) => update("bairro", e.target.value)} placeholder="Seu bairro" className="p-5" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="observacao">Observação</Label>
                  <Input id="observacao" value={formData.observacao} onChange={(e) => update("observacao", e.target.value)} placeholder="Observação (opcional)" className="p-5" maxLength={100} />
                </div>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="flex gap-3">
              {step > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(step - 1)}
                  className="flex-1 font-bold text-lg py-7 rounded-lg"
                >
                  ← Voltar
                </Button>
              )}

              {step < 3 ? (
                <Button
                  type="button"
                  disabled={step === 1 ? !canAdvanceStep1() : !canAdvanceStep2()}
                  onClick={() => setStep(step + 1)}
                  className="flex-1 bg-primary hover:bg-primary-hover text-primary-foreground font-bold text-lg py-7 rounded-lg shadow-lg"
                >
                  Próximo →
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={!canSubmit() || isSubmitting}
                  className="flex-1 bg-primary hover:bg-primary-hover text-primary-foreground font-bold text-lg py-7 rounded-lg shadow-lg"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Candidatura"}
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
      </section>
    </>
  );
};

export default Simulator;
