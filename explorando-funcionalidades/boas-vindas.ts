export class BoasVindas {
    mensagemBoasVindas: string
    constructor(mensagemBoasVindas: string) { this.mensagemBoasVindas = mensagemBoasVindas }
    public getMensagem(): string {
        return this.mensagemBoasVindas
    }
}