package ci.mfpma.dq.entites;

public enum TrancheAge {
	
	VINGTAINE_ET_MOINS("16 ANS - 25 ANS"),
	VINGTAINE("25 ANS - 35 ANS"),
	TRENTAINE("35 ANS - 45 ANS"),
	QUARANTAINE("45 ANS - 55 ANS"),
	CINQUANTAINE_ET_PLUS("55 ANS ET PLUS");
	
	private final String tranche;
	
	private TrancheAge(String tranche) {
		this.tranche = tranche;
	}

	public String getTranche() {
		return tranche;
	}
}
