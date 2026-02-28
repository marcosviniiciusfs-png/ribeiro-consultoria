import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import InputMask from "react-input-mask";

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

  const canSubmit = () => {
    return (
      formData.nome.trim() !== "" &&
      formData.idade.trim() !== "" &&
      formData.telefone.replace(/\D/g, "").length >= 10 &&
      formData.whatsapp.replace(/\D/g, "").length === 11 &&
      formData.cidade.trim() !== "" &&
      formData.bairro.trim() !== ""
    );
  };

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

      await fetch("https://hook.us1.make.com/n17eiuxj1wybbp2mhy6o64lmv1fbjd3c", {
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
            <div className="space-y-2">
              <Label htmlFor="nome">Nome completo</Label>
              <Input id="nome" value={formData.nome} onChange={(e) => update("nome", e.target.value)} placeholder="Seu nome completo" className="p-5" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="idade">Sua idade</Label>
              <Input id="idade" value={formData.idade} onChange={(e) => update("idade", e.target.value)} placeholder="Ex: 25" className="p-5" type="number" min="16" max="99" />
            </div>

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

            <div className="space-y-2">
              <Label htmlFor="cidade">Cidade</Label>
              <Input id="cidade" value={formData.cidade} onChange={(e) => update("cidade", e.target.value)} placeholder="Sua cidade" className="p-5" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bairro">Bairro que mora</Label>
              <Input id="bairro" value={formData.bairro} onChange={(e) => update("bairro", e.target.value)} placeholder="Seu bairro" className="p-5" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="observacao">Observação</Label>
              <Input id="observacao" value={formData.observacao} onChange={(e) => update("observacao", e.target.value)} placeholder="Observação (opcional)" className="p-5" maxLength={100} />
            </div>

            <Button
              type="submit"
              disabled={!canSubmit() || isSubmitting}
              className="w-full bg-primary hover:bg-primary-hover text-primary-foreground font-bold text-lg py-7 rounded-lg shadow-lg"
            >
              {isSubmitting ? "Enviando..." : "Enviar Candidatura"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Simulator;
