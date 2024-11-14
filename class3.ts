//Crie classes para representar diferentes tipos de contas (corrente, poupança, investimento), cada uma com suas características específicas (saldo, taxa de juros, limite de saque). Implemente um sistema de transferências, onde o cliente pode transferir dinheiro entre suas próprias contas ou para outras contas.


class Bancario{
    Saldo:string;
    Salario:Number;
    Taxa_juros:Number;
    Limite_saque:Number;



    constructor(Valor,Conta){
        if(Valor===18.000){
            Conta.saldo+=Valor
        }
    }
}

    class Corrente extends Bancario{
        Taxa_juros: Number=2.1
        Limite_saque:Number=100
    }
    class Poupança extends Bancario{
     Taxa_juros: Number=2.1
     Limite_saque:Number=100
    
    }
    class Investimento extends Bancario{
     Taxa_juros: Number=2.6
     Limite_saque:Number=this.Salario
    }

    //Crie aulas para representar diferentes tipos de veículos de transporte (ônibus, trem, avião), cada um com suas características específicas (capacidade, velocidade, rotas). Implemente um sistema de bilhetagem, onde o usuário pode comprar passagens para diferentes destinos.
    class transporte{
        capacidade:Number;
        velocidade:Number;
        rotas:Number;
       
    
    
        constructor(Valor,passagem){
            if(Valor===4.00){
                passagem.saldo+=Valor
            }
        }
    }
    
        class onibus extends transporte{
           Velocidade:Number=4.0
           rotas:Number=100
        }
        class trem extends transporte{
            Velocidade:Number=4.0
            rotas:Number=100
        }
        class aviao extends transporte{
            Velocidade:Number=4.0
            rotas:Number=this.capacidade
        }
        //Crie classes para representar diferentes tipos de investimentos (renda fixa, renda variável, multimercado), cada um com suas características específicas (taxa de retorno, risco, liquidez). Implemente um sistema de simulação de investimentos, onde o usuário pode escolher diferentes tipos de investimentos e acompanhar sua rentabilidade ao longo do tempo.
        class investimento{
            taxa:Number;
            risco:Number;
            liquidez:Number;
           
        
        
            constructor(geral,retorno){
                if(geral===4.00){
                    retorno.saldo+=geral
                }
            }
        }
        
            class renda extends investimento{
               risco:Number=9.0
               liquidez:Number=500
            }
            class variavel extends investimento{
                risco:Number=1.0
                liquidez:Number=900
            }
            class multimercado extends investimento{
                risco:Number=4.0
                liquidez:Number=this.taxa
            }
            //Crie aulas para representar diferentes tipos de pacientes (adultos, crianças, idosos), cada um com suas necessidades específicas de tratamento. Implemente um sistema de agendamento de consultas, onde o paciente pode marcar consulta com diferentes especialistas.
            class saude{
                adulto:Number;
                crianca:Number;
                idoso:Number;
               exame_geral:Number;
            
            
                constructor(geral,retorno){
                    if(geral===12.000){
                        retorno.saldo+=geral
                    }
                }
            }
            
                class emergencia extends saude{
                   adulto:Number=9.0
                   idoso:Number=500
                }
                class consulta extends  saude{
                    crianca:Number=1.0
                    adulto:Number=900
                }
                class exame extends saude{
                    adulto:Number=4.0
                    crianca:Number=this.exame_geral
                }