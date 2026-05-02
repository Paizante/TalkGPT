import re


def only_digits(value: str) -> str:
    return re.sub(r"\D", "", value or "")


def validate_cpf_cnpj(value: str) -> bool:
    value = only_digits(value)
    return len(value) in (11, 14)
