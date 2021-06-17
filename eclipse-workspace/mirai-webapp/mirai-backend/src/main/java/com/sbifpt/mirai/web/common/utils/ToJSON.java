package com.sbifpt.mirai.web.common.utils;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;

import org.json.JSONException;
import org.json.JSONObject;

import com.google.gson.Gson;

public class ToJSON {

	public static String objectToString(Object obj) {
		Gson g = new Gson();
		String objToStr = null;
		try {
			if (obj != null && obj != "")
				objToStr = g.toJson(obj);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return objToStr;
	}

	public static JSONObject strToObject(String strJson) throws JSONException, UnsupportedEncodingException {
		JSONObject jsonObject = null;
		try {
			if (strJson != null && strJson != "")
				jsonObject = new JSONObject(URLDecoder.decode(strJson, "utf8"));
		} catch (Exception e) {
			e.printStackTrace();
		}

		return jsonObject;
	}
}
