'use strict';

import '../css/style.css';
import '../css/media.css'
import {
    addAnimation, addElement,
    downloadPDF,
    fetchData,
    loadFromLocalStorage,
    removeElement,
    saveData,
    saveToLocalStorage
} from "./utils.js";
import { renderId, renderImage, renderLanguages } from "./profile.js";
import { renderExperiences, renderTools } from "./skills.js";
import { renderEducation, renderRideSide } from "./other.js";
import {createRipple} from "./ripple.js";

const root = document.querySelector('#root');

const renderSection = (className, elements) => {
    const section = document.createElement('section');
    section.classList.add(className, 'row');
    elements.forEach(element => section.appendChild(element));
    root.appendChild(section);
};

const loadPage = async () => {
    let data = loadFromLocalStorage('cvData');

    if (!data) {
        try {
            const response = await fetchData();
            data = await response.json();
            saveToLocalStorage('cvData', data);
        } catch (error) {
            console.error(error);
        }
    }

    if (data) {
        renderSection('profile', [renderImage(), renderId(data.name, data.post), renderLanguages(data.languages)]);
        renderSection('skills', [renderExperiences(data.experience), renderTools(data.tools)]);
        renderSection('other', [renderEducation(data.education), renderRideSide(data.interests, data.email)]);
    }
};

document.addEventListener('DOMContentLoaded', async () => {
    await loadPage();

    document.querySelectorAll('[contenteditable="true"]').forEach(element => {
        element.addEventListener('blur', () => {
            addAnimation(element);
            saveData();
        });
    });

    document.querySelector('.download-btn').addEventListener('click', downloadPDF);

    document.body.addEventListener('click', (event) => {
        if (event.target.classList.contains('most-recent--btn')) {
            const experienceItem = event.target.closest('.experience__item');
            createRipple(event, experienceItem);
            experienceItem.classList.toggle('most-recent');
        }

        if (event.target.classList.contains('add-btn')) {
            const containerSelector = event.target.dataset.container;
            const elementHTML = event.target.dataset.elementHtml;
            addElement(containerSelector, elementHTML);
        }

        if (event.target.classList.contains('delete-btn')) {
            const element = event.target.closest('.deletable');
            removeElement(element);
        }

        if (event.target.classList.contains('education__favorite--btn')) {
            const element = event.target.closest('.education__item');
            createRipple(event, element)
            element.classList.toggle('favorite');
        }
    });
});
