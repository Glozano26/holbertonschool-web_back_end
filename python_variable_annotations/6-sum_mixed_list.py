#!/usr/bin/env python3
"""Complex types - list of floats"""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Sums the elements in the mixed-list"""
    return sum(mxd_lst)
