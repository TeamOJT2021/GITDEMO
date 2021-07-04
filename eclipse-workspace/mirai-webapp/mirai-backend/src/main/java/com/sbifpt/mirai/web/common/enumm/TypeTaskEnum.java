package com.sbifpt.mirai.web.common.enumm;

public enum TypeTaskEnum {

	MUST_DO_1(1), MUST_DO_2(1), MUST_DO_3(1), MUST_DO_4(1), SHOULD_DO_1(1), SOULD_DO_2(1), COULD_DO_1(1);

	private int numVal;

	TypeTaskEnum(int numVal) {
		this.numVal = numVal;
	}

	public int getNumVal() {
		return numVal;
	}
}
