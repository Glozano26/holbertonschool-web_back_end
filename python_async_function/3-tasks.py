#!/usr/bin/env python3
"""Write a function (do not create an async function, use the regular
function syntax to do this) task_wait_random that takes an integer
max_delay and returns a asyncio.Task"""
import asyncio
from asyncio import Task
from random import uniform

wait_random = __import__('0-basic_async_syntax').wait_random


# def task_wait_random(max_delay: int) -> Task:
#     """Get the result of the wait_random coroutine"""
#     loop = asyncio.get_event_loop()
#     task = loop.create_task(wait_random(max_delay))
#     # loop.run_until_complete(task)
#     return task
def task_wait_random(max_delay):
    coro = wait_random(max_delay)
    task = asyncio.ensure_future(coro)
    return task
