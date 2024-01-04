#!/usr/bin/env python3
"""Complex types - functions"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """returns a function that multiplies a float"""
    def function_mult(value: float) -> float:
        return (value * multiplier)
    return (function_mult)
