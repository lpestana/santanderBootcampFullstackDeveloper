
public class Main {

	public static void main(String[] args) {
		Cliente pestana = new Cliente();
		pestana.setNome("Pestana");
		
		Conta cc = new ContaCorrente(pestana);
		Conta poupanca = new ContaPoupanca(pestana);

		cc.depositar(100);
		cc.transferir(50, poupanca);
		
		cc.imprimirExtrato();
		poupanca.imprimirExtrato();
	}

}
