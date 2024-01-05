#!/usr/bin/env python3
import asyncio
import random


async def wait_random(max_delay=10) -> float:
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay


async def main():
    random_time = await wait_random()


asyncio.run(main())
