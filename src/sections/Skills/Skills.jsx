import { useState } from 'react';
import { skillCategories } from '@/data/skills';
import { Section } from '@/components/Section/Section';
import { BackToWorld } from '@/features/developer-world/BackToWorld';
import styles from './Skills.module.css';

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(
    skillCategories[0]?.id
  );

  const [selectedSkill, setSelectedSkill] = useState(null);

  const category = skillCategories.find(
    (item) => item.id === activeCategory
  );

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setSelectedSkill(null);
  };

  return (
    <Section
      id="skills"
      eyebrow="02 — Skills"
      title="Tools of the trade"
      description="Explore the technologies and tools I work with."
    >
      <BackToWorld />

      <div className={styles.explorer}>
        {/* Category Navigation */}
        <div
          className={styles.categories}
          role="tablist"
          aria-label="Skill categories"
        >
          {skillCategories.map((item) => {
            const isActive = item.id === activeCategory;

            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`${styles.categoryButton} ${
                  isActive ? styles.activeCategory : ''
                }`}
                onClick={() => handleCategoryChange(item.id)}
              >
                <span className={styles.categoryNumber}>
                  {String(skillCategories.indexOf(item) + 1).padStart(2, '0')}
                </span>

                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills */}
        <div className={styles.skillsPanel}>
          {category && (
            <>
              <div className={styles.panelHeader}>
                <span className={styles.panelEyebrow}>
                  SELECTED CATEGORY
                </span>

                <h3 className={styles.categoryTitle}>
                  {category.label}
                </h3>
              </div>

              <div className={styles.skillList}>
                {category.skills.map((skill) => {
                  const isSelected =
                    selectedSkill?.name === skill.name;

                  return (
                    <button
                      key={skill.name}
                      type="button"
                      className={`${styles.skill} ${
                        isSelected ? styles.selectedSkill : ''
                      }`}
                      onClick={() => setSelectedSkill(skill)}
                    >
                      <span className={styles.skillName}>
                        {skill.name}
                      </span>

                      <span className={styles.skillArrow}>
                        {isSelected ? '−' : '→'}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Skill Detail */}
              <div
                className={`${styles.skillDetail} ${
                  selectedSkill ? styles.skillDetailVisible : ''
                }`}
                aria-live="polite"
              >
                {selectedSkill ? (
                  <>
                    <div className={styles.detailTop}>
                      <span className={styles.panelEyebrow}>
                        SKILL FOCUS
                      </span>

                      <span className={styles.levelValue}>
                        {selectedSkill.level}%
                      </span>
                    </div>

                    <h4 className={styles.selectedName}>
                      {selectedSkill.name}
                    </h4>

                    <div className={styles.levelTrack}>
                      <span
                        className={styles.levelFill}
                        style={{
                          width: `${selectedSkill.level}%`,
                        }}
                      />
                    </div>

                    <p className={styles.levelText}>
                      Proficiency indicator
                    </p>
                  </>
                ) : (
                  <p className={styles.selectHint}>
                    Select a skill to explore it.
                  </p>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </Section>
  );
}