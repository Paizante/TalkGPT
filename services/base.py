from abc import ABC, abstractmethod
from typing import List
from core.models import LegalRecord


class Collector(ABC):
    name = "base"

    @abstractmethod
    def search(self, document: str) -> List[LegalRecord]:
        raise NotImplementedError
