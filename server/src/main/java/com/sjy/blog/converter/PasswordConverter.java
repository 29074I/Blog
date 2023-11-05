package com.sjy.blog.converter;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;


@Converter
public class PasswordConverter implements AttributeConverter<String, String> {

	@Override
	public String convertToDatabaseColumn(String raw) {
		return encode(raw);
	}

	@Override
	public String convertToEntityAttribute(String encoded) {
		return encoded;
	}
	
	public static final String ALGORITHM = "SHA-256";
	
	/**
	 * Password 암호화
	 * @return 암호화된 비밀번호
	 */
	public static String encode(String password) {
		
		try {
			MessageDigest md = MessageDigest.getInstance(ALGORITHM);
			md.update(password.getBytes());
			return  String.format("%064x", new BigInteger(1, md.digest()));
		} catch (NoSuchAlgorithmException e) {
			throw new RuntimeException(e.getMessage());
		}
	}

}
