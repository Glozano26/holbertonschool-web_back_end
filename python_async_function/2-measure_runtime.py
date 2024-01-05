#!/usr/bin/env python3
"""Measure the runtime"""
import asyncio
import time
from contextlib import contextmanager

wait_n = __import__('1-concurrent_coroutines').wait_n


# async def measure_time(n: int, max_delay: int) -> float:
#     """returns the execution time"""
#     start_time = time.perf_counter()
#     await asyncio.gather(*[wait_n(n, max_delay) for _ in range(n)])
#     total_time = time.perf_counter() - start_time
#     return total_time / n

def measure_time(n: int, max_delay: int) -> float:
    """returns the execution time"""
    start_time = time.time()
    yield
    elapsed_time = time.time() - start_time
